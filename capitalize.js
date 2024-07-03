export function capitalize(string) {
  const letter = string[0];
  return string.replace(letter, letter.toUpperCase());
}
