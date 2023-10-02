export default function formatNumber(number: number) {
  if (!number) {
    return "0";
  }
  let numberTxt = number.toLocaleString();
  return numberTxt;
}
