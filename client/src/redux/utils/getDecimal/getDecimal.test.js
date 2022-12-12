import getDecimal from './getDecimal';

describe('Tests for getDecimal', () => {
  let a;
  let b;
  let c;
  describe('General', () => {
    test('Returns a number', () => {
      a = 5.37;
      expect(typeof getDecimal(a)).toBe('string');
    });
  });
  describe('Functional', () => {
    test('Numbers within borders', () => {
      a = 1.45;
      b = 456;
      c = 7.67;
      expect(getDecimal(a)).toBe('0.45');
      expect(getDecimal(b)).toBe('0.00');
      expect(getDecimal(c)).toBe('0.67');
    });
    test('Numbers on borders', () => {
      a = 0;
      b = 999999999999.99;
      c = 6.456;
      expect(getDecimal(a)).toBe('0.00');
      expect(getDecimal(b)).toBe('0.99');
      expect(getDecimal(c)).toBe('0.46');
    });
    test('Negative numbers', () => {
      a = -5;
      b = -10.05;
      expect(() => getDecimal(a)).toThrow(new Error('Invalid number'));
      expect(() => getDecimal(b)).toThrow(new Error('Invalid number'));
    });
    test('Not numbers', () => {
      a = '';
      b = '5.67';
      c = [];
      expect(() => getDecimal(a)).toThrow(new Error('Invalid number'));
      expect(() => getDecimal(b)).toThrow(new Error('Invalid number'));
      expect(() => getDecimal(c)).toThrow(new Error('Invalid number'));
    });
  });
});
