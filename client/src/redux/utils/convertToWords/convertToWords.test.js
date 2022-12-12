import convertToWords from './convertToWords';

describe('Tests for convertToWords', () => {
  let a;
  let b;
  let c;
  describe('General', () => {
    test('Returns a string', async () => {
      a = { number: '5', currency: 'RUB', language: 'eng' };
      const result = await convertToWords(a);
      expect(typeof result).toBe('string');
    });
    test('Correct argument', async () => {
      a = { number: '10.56', currency: 'GBP', language: 'eng' };
      b = { number: '' };
      const resultA = await convertToWords(a);
      //   const resultB = await convertToWords(b);
      expect(resultA).toBe('Ten pounds 56 pence');
    //   expect(resultB).toBe('Ноль рублей 00 копеек');
    });
    test('Incorrect argument', async () => {
      a = { number: 'test', currency: 'test', language: 'test' };
      b = {};
      c = '';
      await expect(() => convertToWords(a)).rejects.toThrow('Invalid input');
      await expect(() => convertToWords(b)).rejects.toThrow('Invalid input');
      await expect(() => convertToWords(c)).rejects.toThrow('Invalid input');
    });
  });
  describe('Functional', () => {
    test('Numbers within borders', async () => {
      a = { number: '1.45', currency: 'USD', language: 'eng' };
      b = { number: '178.01', currency: 'GBP', language: 'eng' };
      c = { number: '5', currency: 'EUR', language: 'eng' };
      await expect(convertToWords(a)).resolves.toBe('One dollar 45 cents');
      await expect(convertToWords(b)).resolves.toBe('One hundred seventy eight pounds 01 penny');
      await expect(convertToWords(c)).resolves.toBe('Five euros 00 cents');
    });
    test('Numbers on the border', async () => {
      a = { number: '0', currency: 'USD', language: 'eng' };
      b = { number: '999999999999.99', currency: 'RUB', language: 'eng' };
      await expect(convertToWords(a)).resolves.toBe('Zero dollars 00 cents');
      await expect(convertToWords(b)).resolves.toBe('Nine hundred ninety nine billion nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine rubles 99 kopecks');
    });
    test('Numbers outside the border', async () => {
      a = { number: '-5', currency: 'USD', language: 'eng' };
      b = { number: '9999999999999.99', currency: 'RUB', language: 'eng' };
      await expect(() => convertToWords(a)).rejects.toThrow('Invalid input');
      await expect(() => convertToWords(b)).rejects.toThrow('Invalid input');
    });
    test.skip('Translator to Russian', async () => {
      a = { number: '1.45', currency: 'USD', language: 'rus' };
      b = { number: '178.01', currency: 'GBP', language: 'rus' };
      c = { number: '5', currency: 'RUB', language: 'rus' };
      await expect(convertToWords(a)).resolves.toBe('Один доллар 45 центов');
      await expect(convertToWords(b)).resolves.toBe('Сто семьдесят восемь фунтов 01 пенни');
      await expect(convertToWords(c)).resolves.toBe('Пять рублей 00 копеек');
    });
  });
});
