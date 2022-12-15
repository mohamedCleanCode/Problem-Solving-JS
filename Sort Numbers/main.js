function solution(nums) {
  let result = Array.isArray(nums);
  if (result) {
    nums = nums.sort((a, b) => a - b);
    return nums;
  } else {
    return [];
  }
}
console.log(solution([1, 2, 3, 10, 5]));
console.log(solution(null));
