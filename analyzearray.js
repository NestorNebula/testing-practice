export function analyzeArray(array) {
  const avg = array.reduce((prev, next) => prev + next, 0) / array.length;
  const max = array.reduce((prev, next) => (prev < next ? next : prev));
  const min = array.reduce((prev, next) => (prev > next ? next : prev));
  return {
    average: avg,
    length: array.length,
    max: max,
    min: min,
  };
}
