import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from './index';

describe('capitalize', () => {
  test('capitalize basic string', () => {
    expect(capitalize('light')).toMatch('Light');
  });

  test('capitalize sentence', () => {
    expect(capitalize('there is a tree in the forest.')).toMatch(
      'There is a tree in the forest.'
    );
  });

  test('capitalize a string starting with a number', () => {
    expect(capitalize('60 seconds in a minute')).toMatch(
      '60 Seconds in a minute'
    );
  });

  test('capitalize a string starting with a space', () => {
    expect(capitalize(' space')).toMatch(' Space');
  });

  test('capitalize a string starting with a special character', () => {
    expect(capitalize('$dollar')).toMatch('$Dollar');
  });
});

describe('reverseString', () => {
  test('reverse basic string', () => {
    expect(reverseString('dark')).toMatch('krad');
  });

  test('reverse sentence', () => {
    expect(reverseString('The cat is sleeping')).toMatch('gnipeels si tac ehT');
  });

  test('reverse sentence with numbers', () => {
    expect(reverseString('He has 20 dollars to buy a gift')).toMatch(
      'tfig a yub ot srallod 02 sah eH'
    );
  });

  test('reverse sentence with special characters', () => {
    expect(reverseString('twenty $ is enough!')).toMatch('!hguone si $ ytnewt');
  });
});

describe('calculator', () => {
  test('add', () => {
    expect(calculator.add(2, 1)).toBe(3);
  });

  test('subtract', () => {
    expect(calculator.subtract(2, 1)).toBe(1);
  });

  test('subtract with b being bigger than a', () => {
    expect(calculator.subtract(3, 12)).toBe(-9);
  });

  test('divide', () => {
    expect(calculator.divide(6, 2)).toBe(3);
  });

  test('divide and return floating point', () => {
    expect(calculator.divide(3, 2)).toBe(1.5);
  });

  test('divide with b being bigger than a', () => {
    expect(calculator.divide(16, 32)).toBe(0.5);
  });

  test('multiply', () => {
    expect(calculator.multiply(3, 3)).toBe(9);
  });

  test('multiply by 0', () => {
    expect(calculator.multiply(9, 0)).toBe(0);
  });
});

describe('caesarCipher', () => {
  test('cipher word', () => {
    expect(caesarCipher('home', 3)).toMatch('krph');
  });

  test('works with last letters', () => {
    expect(caesarCipher('xyz', 6)).toMatch('def');
  });

  test('works with numbers', () => {
    expect(caesarCipher('number3', 1)).toMatch('ovncfs3');
  });

  test('works with punctuation', () => {
    expect(caesarCipher("this, of course, wasn't expected!", 2)).toMatch(
      "vjku, qh eqwtug, ycup'v gzrgevgf!"
    );
  });

  test('works with a factor of 0', () => {
    expect(caesarCipher('secret')).toMatch('secret');
  });
});

describe('analyzeArray', () => {
  test('analyse basis array', () => {
    expect(analyzeArray([3, 0, 6])).toEqual({
      average: 3,
      min: 0,
      max: 6,
      length: 3,
    });
  });

  test('analyse array with negative numbers', () => {
    expect(analyzeArray([3, -4, 20, 1])).toEqual({
      average: 5,
      min: -4,
      max: 20,
      length: 4,
    });
  });

  test('analyse array with only one element', () => {
    expect(analyzeArray([1])).toEqual({
      average: 1,
      min: 1,
      max: 1,
      length: 1,
    });
  });
});
