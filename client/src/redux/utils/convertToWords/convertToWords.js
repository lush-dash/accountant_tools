import { ToWords } from 'to-words';
import translate from 'translate';
import getDecimal from '../getDecimal/getDecimal';

translate.engine = 'google';
translate.key = process.env.GOOGLE_KEY;

export default async function convertToWords(data) {
  if (!(Number(data.number) >= 0 && Number(data.number) <= 999999999999.99)) {
    throw new Error('Invalid input');
  }
  try {
    let toWords;
    if (data.currency === 'EUR') {
      toWords = new ToWords({
        localeCode: 'en-GB',
        converterOptions: {
          currency: true,
          ignoreDecimal: true,
          ignoreZeroCurrency: false,
          doNotAddOnly: true,
          currencyOptions: {
            name: 'Euro',
            plural: 'Euros',
            symbol: '€',
            fractionalUnit: {
              name: 'Cent',
              plural: 'Cents',
              symbol: '',
            },
          },
        },
      });
    } else if (data.currency === 'USD') {
      toWords = new ToWords({
        localeCode: 'en-GB',
        converterOptions: {
          currency: true,
          ignoreDecimal: true,
          ignoreZeroCurrency: false,
          doNotAddOnly: true,
          currencyOptions: {
            name: 'U.S. Dollar',
            plural: 'U.S. Dollars',
            symbol: '$',
            fractionalUnit: {
              name: 'Cent',
              plural: 'Cents',
              symbol: '',
            },
          },
        },
      });
    } else if (data.currency === 'GBP') {
      toWords = new ToWords({
        localeCode: 'en-GB',
        converterOptions: {
          currency: true,
          ignoreDecimal: true,
          ignoreZeroCurrency: false,
          doNotAddOnly: true,
          currencyOptions: {
            name: 'Pound Sterling',
            plural: 'Pounds Sterling',
            symbol: '£',
            fractionalUnit: {
              name: 'Penny',
              plural: 'Pence',
              symbol: '',
            },
          },
        },
      });
    } else {
      toWords = new ToWords({
        localeCode: 'en-GB',
        converterOptions: {
          currency: true,
          ignoreDecimal: true,
          ignoreZeroCurrency: false,
          doNotAddOnly: true,
          currencyOptions: {
            name: 'Ruble',
            plural: 'Rubles',
            symbol: '₽',
            fractionalUnit: {
              name: 'Kopeck',
              plural: 'Kopecks',
              symbol: '',
            },
          },
        },
      });
    }
    const decimal = getDecimal(Number(data.number));

    let decimalWithfractionalUnit;
    if (decimal === '0.00') {
      decimalWithfractionalUnit = `00 ${toWords.options.converterOptions.currencyOptions.fractionalUnit.plural}`;
    } else if (decimal === '0.01') {
      decimalWithfractionalUnit = `01 ${
        toWords.options.converterOptions.currencyOptions.fractionalUnit.name}`;
    } else {
      decimalWithfractionalUnit = `${`${decimal}`.slice(-2)} ${
        toWords.options.converterOptions.currencyOptions.fractionalUnit.plural}`;
    }

    const words = `${toWords.convert(Math.trunc(data.number))} ${decimalWithfractionalUnit}`;

    if (data.language === 'eng') {
      const result = words.slice(0, 1) + words.slice(1).toLowerCase();
      return result;
    }

    const translation = await translate(words, 'rus');
    return translation;
  } catch (error) {
    throw new Error(error);
  }
}

convertToWords(-1).then(console.log).catch(console.log);
