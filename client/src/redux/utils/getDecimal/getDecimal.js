export default function getDecimal(number) {
  if (number < 0 || typeof number !== 'number') {
    throw new Error('Invalid number');
  }
  return (number - Math.trunc(number)).toFixed(2);
}
