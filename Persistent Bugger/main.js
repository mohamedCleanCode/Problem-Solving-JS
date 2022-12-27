function persistence(num) {
  let times = 0;

  num = num.toString();

  while (num.length > 1) {
    times++;
    num = num
      .split("")
      .map(Number)
      .reduce((a, b) => a * b)
      .toString();
  }

  return times;
}
console.log(persistence(39));
console.log("#############");
console.log(persistence(999));
