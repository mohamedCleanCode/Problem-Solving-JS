function digPow(n, p) {
  // ...
  let split = n.toString().split("");
  let sum = 0;
  split.forEach((num) => {
    sum += num ** p;
    p++;
  });
  let k = sum / n;
  console.log(k);
  if (sum === k * n) {
    return k;
  } else {
    return -1;
  }
}
console.log(digPow(46288, 3));
