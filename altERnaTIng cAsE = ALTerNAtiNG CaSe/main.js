String.prototype.toAlternatingCase = function (value) {
  //   Define your method here :)
  let result = "";
  Array.from(this).forEach((ele) => {
    ele = ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
    result += ele;
  });
  return result;
};
console.log("hello worlD".toAlternatingCase());
