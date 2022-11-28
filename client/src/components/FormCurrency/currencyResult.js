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
        ignoreDecimal: false,
        ignoreZeroCurrency: false,
        doNotAddOnly: true,
        currencyOptions: {
          name: 'Russian Ruble',
          plural: 'Russian Rubles',
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
        ignoreDecimal: false,
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
        ignoreDecimal: false,
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
        ignoreDecimal: false,
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

  const words = toWords.convert(data.number);

  const translation = await translate(words, 'rus');

  const result = { eng: words, rus: translation };
  return result;
}
