function findNb(m) {
  // your code
  let counter = 0;
  while (m > 0) {
    counter++;
    let cubes = Math.pow(counter, 3);
    m = m - cubes;
  }
  if (Math.sign(m) !== -1) return counter;
  return -1;
}
console.log(findNb(4183059834009));
