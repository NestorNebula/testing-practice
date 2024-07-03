export function caesarCipher(string, factor) {
  const regexp = /([A-Za-z])/;
  let cipher = '';
  for (let i = 0; i < string.length; i++) {
    if (regexp.test(string[i])) {
      let code = string.charCodeAt(i);
      for (let j = 0; j < factor; j++) {
        if (code === 90) code = 65;
        else if (code === 122) code = 97;
        else code += 1;
      }
      cipher += String.fromCharCode(code);
    } else {
      cipher += string[i];
    }
  }
  return cipher;
}
