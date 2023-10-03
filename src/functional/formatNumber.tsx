export default function formatNumber(number: number) {
  if (!number) {
    return "-";
  }
  let numberTxt = number.toLocaleString();
  return numberTxt;
}
