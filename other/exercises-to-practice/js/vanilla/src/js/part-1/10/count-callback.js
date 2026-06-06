export default function counter(number, callback) {
  for (let i = 1; i <= number; i++) {
    callback(i);
  }
}