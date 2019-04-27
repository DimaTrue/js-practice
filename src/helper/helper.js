export function random(min, max) {
  return Math.floor(min + Math.random() * (max + 1) - min);
}

export function gavg(arr) {
  return Math.pow(arr.reduce((sum, current) => {
    return sum * current;
  }), 1 / arr.length);
}

export function totalSum(arr) {
  let sum = 0;
  arr.forEach(el => {
    sum += el;
  });
  return sum;
}
