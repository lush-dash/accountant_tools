import axios from 'axios';
import dayjs from 'dayjs';

export default async function findDate(data) {
  try {
    const {
      startDate, days, startDateIncluded, lastDateIncluded, workingDays,
    } = data;
    const firstDay = startDateIncluded ? startDate : dayjs(startDate).add(1, 'day').format('YYYYMMDD');
    const numberOfDays = lastDateIncluded ? Number(days) - 1 : Number(days);
    const lastDay = dayjs(firstDay).add(numberOfDays, 'day').format('YYYYMMDD');

    if (!workingDays) {
      return lastDay;
    }

    const dates = {
      startDate: dayjs(firstDay).format('YYYYMMDD'),
      endDate: dayjs(lastDay).format('YYYYMMDD'),
    };
    let numberWorkingDays = 0;
    let numberOfDaysOff;
    while (numberWorkingDays < numberOfDays || numberOfDaysOff) {
      // eslint-disable-next-line no-await-in-loop
      const res = await axios.get(`https://isdayoff.ru/api/getdata?date1=${dates.startDate}&date2=${dates.endDate}&cc=ru&delimeter=/&covid=0&sd=0`);
      console.log(res.data);
      console.log(dates);
      numberOfDaysOff = res.data.toString().split('/').filter((el) => el === '1').length;
      numberWorkingDays += res.data.toString().split('/').filter((el) => el === '0').length;
      dates.startDate = dayjs(dates.endDate).add(1, 'day').format('YYYYMMDD');
      dates.endDate = dayjs(dates.startDate).add(numberOfDaysOff - 1, 'day').format('YYYYMMDD');
      console.log('working days', numberWorkingDays);
    }
    return dates.endDate;
  } catch (error) {
    throw new Error(error);
  }
}
