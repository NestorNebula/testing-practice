import { capitalize } from './capitalize';
import { reverseString } from './reversestring';

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
