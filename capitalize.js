export function capitalize(string) {
  const regexp = /([A-Za-z])/;
  for (let i = 0; i < string.length; i++) {
    if (regexp.test(string[i])) {
      return string.replace(string[i], string[i].toUpperCase());
    }
  }
}
