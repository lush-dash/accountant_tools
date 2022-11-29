import { ToWords } from 'to-words';
import translate from 'translate';

translate.engine = 'google';
translate.key = 'bd23f16262msh35b2d461efdeb66p18316bjsnc833ae556bfb';

export default async function countCurrencyResult(data) {
  let toWords;
  if (data.currency === 'RUB') {
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
  } else if (data.currency === 'EUR') {
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
  }

  const decimal = (data.number - Math.trunc(data.number)).toFixed(2);

  let decimalWithfractionalUnit;
  if (decimal === 0) {
    decimalWithfractionalUnit = `00 ${toWords.options.converterOptions.currencyOptions.fractionalUnit.plural}`;
  } else if (decimal === 0.01) {
    decimalWithfractionalUnit = `01 ${
      toWords.options.converterOptions.currencyOptions.fractionalUnit.name}`;
  } else {
    decimalWithfractionalUnit = `${`${decimal}`.slice(-2)} ${
      toWords.options.converterOptions.currencyOptions.fractionalUnit.plural}`;
  }

  const words = `${toWords.convert(Math.trunc(data.number))} ${decimalWithfractionalUnit}`;

  if (data.language === 'eng') {
    const result = { result: words.slice(0, 1) + words.slice(1).toLowerCase() };
    return result;
  }

  const translation = await translate(words, 'rus');
  const result = { result: translation };
  return result;
}
