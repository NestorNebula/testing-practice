import { capitalize } from './capitalize';

test('capitalize basic string', () => {
  expect(capitalize('light')).toMatch('Light');
});
