export default function abbreviateNumber(num: number) {
  if (num < 1000) {
    return num.toString();
  }
  var tempNum = num;
  var val = 0;
  var unit = "";
  if (num.toString().length > 9) {
    val = Math.round((tempNum / 1000000000) * 100) / 100;
    unit = "B";
  } else if (num.toString().length > 6 && num.toString().length <= 9) {
    val = Math.round((tempNum / 1000000) * 100) / 100;
    unit = "M";
  } else {
    val = Math.round((tempNum / 1000) * 100) / 100;
    unit = "K";
  }

  return val + unit;
}
