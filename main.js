// 01 leetcode

// let twoSum = function (nums, target) {
//   let result = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         result.push(i);
//         result.push(j);
//       }
//     }
//   }
//   return result;
// };
// console.log(twoSum([3, 2, 3], 6));

console.log("=".repeat(30));
// 02 edabit---> Matchstick Houses

// let matchHouses = (step) => {
//   if (step === 0) {
//     return `Step 0 returns ${step} matchsticks.`;
//   } else {
//     let result = 5 * step + 1;
//     return result;
//   }
// };

// console.log(matchHouses(0));
// console.log(matchHouses(1));
// console.log(matchHouses(4));
// console.log(matchHouses(87));

console.log("=".repeat(30));
// 03 edabit---> Left Shift by Powers of Two

// function shiftToLeft(x, y) {
//   return x * Math.pow(2, y);
// }
// console.log(shiftToLeft(5, 2));
// console.log(shiftToLeft(10, 3));
// console.log(shiftToLeft(-32, 2));

console.log("=".repeat(30));
// 04 edabit---> Find the Smallest and Biggest Numbers

// function minMax(arr) {
//   let result = [];
//   result.push(Math.min(...arr));
//   result.push(Math.max(...arr));
//   return result;
// }
// console.log(minMax([1, 2, 3, 4, 5]));
// console.log(minMax(minMax([2334454, 5])));
// console.log(minMax([1]));

console.log("=".repeat(30));
// 05 leetcode ---> Palindrome Number

// let isPalindrome = function (x) {
//   let reverse = Number(x.toString().split("").reverse().join(""));
//   if (x === reverse) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(isPalindrome(131));

console.log("=".repeat(30));
// 06 leetcode ---> Roman to Integer

// let romanToInt = function (s) {
//   let symbol = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };
//   let result = 0;
//   if (s === "") return 0;
//   for (let i = 0; i < s.length; i++) {
//     let first = symbol[s[i]]; // I = 1
//     let second = symbol[s[i + 1]]; // V = 5
//     // 1 < 5 ? result -= 1 : result += first
//     first < second ? (result -= first) : (result += first);
//   }
//   return result;
// };
// console.log(romanToInt("III"));

console.log("=".repeat(30));
// 07 leetcode ---> Power of Three

// function isPowerOfThree(n) {
//   if (n === 0) {
//     return false;
//   } else {
//     while (n % 3 === 0) {
//       n /= 3;
//     }
//     return n === 1;
//   }
// }
// console.log(isPowerOfThree(27));

console.log("=".repeat(30));
// 08 leetcode ---> Longest Common Prefix

let longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  } else {
    for (let i = 0; i < strs.length; i++) {
      // fl
      if (strs[i][i] === strs[i + 1][i]) {
        return strs[0].slice(i, i);
      }
    }
  }
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));

console.log("=".repeat(30));
// 09 edabit ---> Convert Minutes into Seconds   (Very Easy)

function convert(minutes) {
  return minutes * 60;
}
console.log(convert(5));
console.log(convert(3));
console.log(convert(2));

console.log("=".repeat(30));
// 10 edabit ---> Return the Next Number from the Integer Passed  (Very Easy)

function addition(num) {
  return ++num;
}
console.log(addition(0));
console.log(addition(9));
console.log(addition(-3));

console.log("=".repeat(30));
// 11 edabit ---> Area of a Triangle  (Very Easy)

function triArea(base, height) {
  return (base * height) / 2;
}
console.log(triArea(3, 2));
console.log(triArea(7, 4));
console.log(triArea(10, 10));

console.log("=".repeat(30));
// 12 edabit ---> Convert Age to Days  (Very Easy)

function calcAge(age) {
  return age * 365;
}
console.log(calcAge(65));
console.log(calcAge(0));
console.log(calcAge(20));

console.log("=".repeat(30));
// 13 edabit ---> Buggy Code (Part 1)  (Very Easy)

function cubes(a) {
  return a ** 3;
}
console.log(cubes(3));
console.log(cubes(5));
console.log(cubes(10));

console.log("=".repeat(30));
// 14 edabit ---> Return the First Element in an Array  (Very Easy)

function getFirstValue(arr) {
  return arr[0];
}
console.log(getFirstValue([1, 2, 3]));
console.log(getFirstValue([80, 5, 100]));
console.log(getFirstValue([-500, 0, 50]));

console.log("=".repeat(30));
// 15 edabit ---> Power Calculator  (Very Easy)

function circuitPower(voltage, current) {
  return voltage * current;
}
console.log(circuitPower(230, 10));
console.log(circuitPower(110, 3));
console.log(circuitPower(480, 20));

console.log("=".repeat(30));
// 16 edabit ---> Find the Perimeter of a Rectangle  (Very Easy)

function findPerimeter(length, width) {
  return (length + width) * 2;
}
console.log(findPerimeter(6, 7));
console.log(findPerimeter(20, 10));
console.log(findPerimeter(2, 9));

console.log("=".repeat(30));
// 17 edabit ---> Return Something to Me!  (Very Easy)

function giveMeSomething(a) {
  return `something ${a}`;
}

console.log(giveMeSomething("is better than nothing"));
console.log(giveMeSomething("Bob Jane"));
console.log(giveMeSomething("something"));

console.log("=".repeat(30));
// 18 edabit ---> Sum of Polygon Angles  (Very Easy)

function sumPolygon(n) {
  return (n - 2) * 180;
}
console.log(sumPolygon(3));
console.log(sumPolygon(4));
console.log(sumPolygon(6));

console.log("=".repeat(30));
// 19 edabit ---> Basketball Points  (Very Easy)

function points(twoPointers, threePointers) {
  return 2 * twoPointers + threePointers * 3;
}
console.log(points(1, 1));
console.log(points(7, 5));
console.log(points(38, 8));

console.log("=".repeat(30));
// 21 edabit ---> Less Than 100?  (Very Easy)

function lessThan100(a, b) {
  if (a + b < 100) return true;
  else return false;
}
console.log(lessThan100(22, 15));
console.log(lessThan100(83, 34));
console.log(lessThan100(3, 77));

console.log("=".repeat(30));
// 22 edabit ---> Buggy Code (Part 7)  (Very Easy)

function swap(a, b) {
  return ([a, b] = [b, a]);
}
console.log(swap(100, 200));
console.log(swap(44, 33));
console.log(swap(21, 12));

console.log("=".repeat(30));
// 23 edabit ---> The Farm Problem (Very Easy)

function animals(chickens, cows, pigs) {
  return chickens * 2 + cows * 4 + pigs * 4;
}
console.log(animals(2, 3, 5));
console.log(animals(1, 2, 3));
console.log(animals(5, 2, 8));

console.log("=".repeat(30));
// 24 edabit ---> Using the "&&" Operator (Very Easy)

function and(a, b) {
  if (a === false && b === true) return false;
  else if (a === true && b === false) return false;
  else if (a === true && b === true) return true;
  else return false;
}
console.log(and(true, false));
console.log(and(true, true));
console.log(and(false, true));
console.log(and(false, false));

console.log("=".repeat(30));
// 25 edabit ---> Are the Numbers Equal? (Very Easy)

function isSameNum(num1, num2) {
  if (num1 === num2) return true;
  else return false;
}
console.log(isSameNum(4, 8));
console.log(isSameNum(2, 2));
console.log(isSameNum(2, "2"));

console.log("=".repeat(30));
// 26 edabit ---> Football Points (Very Easy)

function footballPoints(wins, draws, losses) {
  return wins * 3 + draws * 1 + losses * 0;
}

console.log(footballPoints(3, 4, 2));
console.log(footballPoints(5, 0, 2));
console.log(footballPoints(0, 0, 1));

console.log("=".repeat(30));
// 27 edabit ---> Convert Hours and Minutes into Seconds (Very Easy)

function convert(hours, minutes) {
  return hours * 60 * 60 + minutes * 60;
}
console.log(convert(1, 3));
console.log(convert(2, 0));
console.log(convert(0, 0));

console.log("=".repeat(30));
// 28 edabit ---> Fix the Expression (Very Easy)

function isSeven(x) {
  return x === 7 ? true : false;
}
console.log(isSeven(4));
console.log(isSeven(9));
console.log(isSeven(7));

console.log("=".repeat(30));
// 29 edabit ---> Equality Check (Very Easy)

function checkEquality(a, b) {
  if (typeof a === typeof b) return true;
  else return false;
}
console.log(checkEquality(1, true));
console.log(checkEquality(0, "0"));
console.log(checkEquality(1, 1));

console.log("=".repeat(30));
// 30 edabit ---> Profitable Gamble (Very Easy)

function profitableGamble(prob, prize, pay) {
  return prob * prize > pay ? true : false;
}
console.log(profitableGamble(0.2, 50, 9));
console.log(profitableGamble(0.9, 1, 2));
console.log(profitableGamble(0.9, 3, 2));

console.log("=".repeat(30));
// 31 edabit ---> Boolean to String Conversion (Very Easy)

function boolToString(flag) {
  return String(flag);
}
console.log(boolToString(true));
console.log(boolToString(false));

console.log("=".repeat(30));
// 32 edabit ---> Using Arrow Functions (Very Easy)

let arrowFunc = (str) => str;
console.log(arrowFunc(3));
console.log(arrowFunc("3"));
console.log(arrowFunc(true));

console.log("=".repeat(30));
// 33 edabit ---> Frames Per Second (Very Easy)

function frames(minutes, fps) {
  return minutes * 60 * fps;
}
console.log(frames(1, 1));
console.log(frames(10, 1));
console.log(frames(10, 25));

console.log("=".repeat(30));
// 34 edabit ---> Miserable Parody of a Calculator (Very Easy) eval() methods

function calculator(str) {
  return eval(str);
}
console.log(calculator("23+4"));
console.log(calculator("45-15"));
console.log(calculator("13+2-5*2"));
console.log(calculator("49/7*2-3"));

console.log("=".repeat(30));
// 35 edabit ---> Buggy Code (Part 4) (Very Easy)

function greeting(name) {
  if (name == "Mubashir") {
    return "Hello, my Love!";
  } else return "Hello, " + name + "!";
}
console.log(greeting("Matt"));
console.log(greeting("Helen"));
console.log(greeting("Mubashir"));

console.log("=".repeat(30));
// 36 edabit ---> Two Makes Ten (Very Easy)

function makesTen(a, b) {
  if (a === 10 || b === 10) return true;
  else if (a + b === 10) return true;
  else return false;
}
console.log(makesTen(9, 10));
console.log(makesTen(10, 9));
console.log(makesTen(9, 9));
console.log(makesTen(1, 9));

console.log("=".repeat(30));
// 37 edabit ---> Let's Fuel Up! (Very Easy)

function calculateFuel(n) {
  if (n * 10 < 100) return 100;
  else return n * 10;
}
console.log(calculateFuel(15));
console.log(calculateFuel(23.5));
console.log(calculateFuel(3));

console.log("=".repeat(30));
// 38 edabit ---> Buggy Code (Part 2) (Very Easy)

function maxNum(n1, n2) {
  if (n1 > n2) {
    return n1;
  } else {
    return n2;
  }
}
console.log(maxNum(3, 7));
console.log(maxNum(-1, 0));
console.log(maxNum(1000, 400));

console.log("=".repeat(30));
// 39 edabit ---> Pair Management (Very Easy)

function makePair(num1, num2) {
  // return [num1, num2];
  return Array(num1, num2);
}
console.log(makePair(1, 2));
console.log(makePair(51, 21));
console.log(makePair(512124, 215));

console.log("=".repeat(30));
// 40 edabit ---> Compare Strings by Count of Characters (Very Easy)

function comp(str1, str2) {
  return str1.length === str2.length ? true : false;
}
console.log(comp("AB", "CD"));
console.log(comp("ABC", "DE"));
console.log(comp("hello", "edabit"));

console.log("=".repeat(30));
// 41 edabit ---> Is the String Empty? (Very Easy)

function isEmpty(s) {
  return s === "" ? true : false;
}
console.log(isEmpty(""));
console.log(isEmpty(" "));
console.log(isEmpty("a"));

console.log("=".repeat(30));
// 42 edabit ---> Check if an Integer is Divisible By Five (Very Easy)

function divisibleByFive(n) {
  return n % 5 === 0 ? true : false;
}
console.log(divisibleByFive(5));
console.log(divisibleByFive(-55));
console.log(divisibleByFive(37));

console.log("=".repeat(30));
// 43 edabit ---> Multiple of 100 (Very Easy)

function divisible(num) {
  return num % 100 === 0 ? true : false;
}
console.log(divisible(1));
console.log(divisible(1000));
console.log(divisible(100));

console.log("=".repeat(30));
// 44 edabit ---> Recursion: Length of a String (Very Easy)

function length(str) {
  return str.length;
}
console.log(length("apple"));
console.log(length("make"));
console.log(length("a"));
console.log(length(""));

console.log("=".repeat(30));
// 45 edabit ---> Divides Evenly (Very Easy)

function dividesEvenly(a, b) {
  if (a >= b) {
    return a % b === 0 ? true : false;
  }
}
console.log(dividesEvenly(98, 7));
console.log(dividesEvenly(85, 4));

console.log("=".repeat(30));
// 46 edabit ---> Return a String as an Integer (Very Easy)

function stringInt(str) {
  return parseInt(str);
}
console.log(stringInt("6"));
console.log(stringInt("1000"));
console.log(stringInt("12"));

console.log("=".repeat(30));
// 47 edabit ---> Area of a Rectangle (Very Easy)

function area(h, w) {
  if (h <= 0) return -1;
  else {
    return h * w;
  }
}
console.log(area(3, 4));
console.log(area(10, 11));
console.log(area(-1, 5));
console.log(area(0, 2));

console.log("=".repeat(30));
// 48 edabit ---> Minimal I: If Boolean Then Boolean (Very Easy)

function isEven(n) {
  if (n % 2 === 0) {
    return true;
  } else if (n % 2 !== 0) {
    return false;
  }
}
console.log(isEven(5));
console.log(isEven(4));
console.log(isEven(8));

console.log("=".repeat(30));
// 49 edabit ---> Concatenate First and Last Name into One String (Very Easy)

function concatName(firstName, lastName) {
  // return ([firstName, lastName] = [lastName, firstName].join(" "));
  // return lastName + " " + firstName;
  return `${lastName} ${firstName}`;
}
console.log(concatName("First", "Last"));
console.log(concatName("John", "Doe"));
console.log(concatName("Mary", "Jane"));

console.log("=".repeat(30));
// 50 edabit ---> Buggy Code (Very Easy)

function has_bugs(buggy_code) {
  if (buggy_code) {
    return "sad days";
  } else {
    return "it's a good day";
  }
}
console.log(has_bugs(true));
console.log(has_bugs(false));

console.log("=".repeat(30));
// 51 edabit ---> Find the Smallest and Biggest Numbers (Easy)

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}
console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([2334454, 5]));
console.log(minMax([1]));

console.log("=".repeat(30));
// 52 edabit ---> Which Function Returns the Larger Number? (Easy)

function whichIsLarger(f, g) {
  if (f() > g()) return "f";
  if (f() < g()) return "g";
  if (f() == g()) return "neither";
}
console.log(
  whichIsLarger(
    () => 5,
    () => 10
  )
);
console.log(
  whichIsLarger(
    () => 25,
    () => 25
  )
);
console.log(
  whichIsLarger(
    () => 505050,
    () => 5050
  )
);
let hi = () => 5050;
console.log(hi());

console.log("=".repeat(30));
// 53 edabit ---> Convert a Number to Base-2 (Easy)

function binary(decimal) {
  let result = [];
  while (decimal != 0) {
    let reminder = decimal % 2;
    // let text = `${decimal}/2, reminder = ${reminder}, quotient = ${parseInt(decimal / 2)}`;
    result.push(reminder);
    decimal = parseInt(decimal / 2);
    // console.log(text);
  }
  return result.reverse().join("");
}
// binary(2);
console.log(binary(5));
// console.log((5).toString(2));

console.log("=".repeat(30));
// 54 edabit ---> Check if One Array can be Nested in Another (Easy)

function canNest(arr1, arr2) {
  let arr1Min = Math.min(...arr1);
  let arr2Min = Math.min(...arr2);
  let arr1Max = Math.max(...arr1);
  let arr2Max = Math.max(...arr2);
  if (arr1Min > arr2Min && arr1Max < arr2Max) return true;
  else return false;
}
console.log(canNest([1, 2, 3, 4], [0, 6]));
console.log(canNest([3, 1], [4, 0]));
console.log(canNest([9, 9, 8], [8, 9]));
console.log(canNest([1, 2, 3, 4], [2, 3]));

console.log("=".repeat(30));
// 55 codewars ---> Square Every Digit

function SquareEveryDigit(num) {
  let arr = [...num.toString()];
  let result = parseInt(arr.map((el) => parseInt(Math.pow(el, 2))).join(""));
  return result;
}
console.log(SquareEveryDigit(9119));

console.log("=".repeat(30));
// 56 edabit --> How Much is True? (Medium)

function countTrue(arr) {
  let count = 0;
  if (arr === []) {
    return 0;
  } else {
    arr.map((el) => (el === false ? (count += 0) : (count += 1)));
  }
  console.log(count);
}

countTrue([false, false, false, false]);
countTrue([true, false, false, true, false]);
countTrue([]);

console.log("=".repeat(30));
// 57 edabit --> A Redundant Function (Medium)

function redundant(str) {
  let func = () => str;
  return func();
}
const f1 = redundant("apple");
console.log(f1);

const f2 = redundant("pear");
console.log(f2);

const f3 = redundant("");
console.log(f3);
