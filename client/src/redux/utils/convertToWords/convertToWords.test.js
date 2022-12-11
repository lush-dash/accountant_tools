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
      expect(resultA).toBe('Ten pounds sterling 56 pence');
    //   expect(resultB).toBe('Ноль рублей 00 копеек');
    });
    test('Incorrect argument', async () => {
      a = { number: 'test', currency: 'test', language: 'test' };
      b = {};
      c = '';

      await expect(() => convertToWords(a)).rejects.toThrow('Invalid input');

    //   expect(async () => {
    //     const resultB = await convertToWords(b);
    //     return resultB;
    //   }).toThrow('Invalid input');
    //   expect(async () => {
    //     const resultC = await convertToWords(c);
    //     return resultC;
    //   }).toThrow('Invalid input');
    });
  });
//   describe('Functional', () => {
//     test('Numbers within borders', () => {
//       a = 1.45;
//       b = 456;
//       c = 7.67;
//       expect(convertToWords(a)).toBe('0.45');
//       expect(convertToWords(b)).toBe('0.00');
//       expect(convertToWords(c)).toBe('0.67');
//     });
//   });
});
