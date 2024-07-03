export function reverseString(string) {
  let newString = '';
  for (let i = string.length; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
}
