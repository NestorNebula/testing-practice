import { capitalize } from './capitalize';

test('capitalize basic string', () => {
  expect(capitalize('light')).toMatch('Light');
});

test('capitalize sentence', () => {
  expect(capitalize('there is a tree in the forest.')).toMatch(
    'There is a tree in the forest.'
  );
});
