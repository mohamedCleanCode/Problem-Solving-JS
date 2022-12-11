function diamond(n) {
  let star = "*";
  let result = "";
  let repeat = 1;
  let mid = Math.ceil(n / 2);
  if (n % 2 === 0 || Math.sign(n) === -1 || n === 0) {
    return null;
  } else {
    for (let i = 1; i <= n; i++) {
      if (i <= mid) {
        result += `${" ".repeat(mid - i)}${star.repeat(repeat)}\n`;
        repeat += 2;
      }
    }
    repeat -= 4;
    for (let j = 1; j < mid; j++) {
      result += `${" ".repeat(j)}${star.repeat(repeat)}\n`;
      repeat -= 2;
    }
  }
  return result;
}
console.log(diamond(13));
