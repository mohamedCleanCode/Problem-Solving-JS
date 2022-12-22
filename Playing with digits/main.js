function digPow(n, p) {
  // ...
  let split = n.toString().split("");
  let sum = 0;
  split.forEach((num) => {
    sum += num ** p;
    p++;
  });
  let k = sum / n;
  if (Number.isInteger(k)) {
    return k;
  } else {
    return -1;
  }
}
console.log(digPow(89, 1));
console.log(digPow(92, 1));
console.log(digPow(46288, 3));
console.log(digPow(55, 3));
