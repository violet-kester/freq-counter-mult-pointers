// add whatever parameters you deem necessary & write docstring
/**include docstring like what it takes and returns
 * This should take a sorted array of numbers, nums, and a numeric targetAvg.
 * It should check if any of the numbers can be averaged to match the targetAvg.
 * It returns true or false.
 *
 *
 */

function averagePair(nums, targetAvg) {
  let left = 0; //left: 1
  let right = nums.length - 1; //right: 2

  while (left < right) {
    const avg = (nums[left] + nums[right]) / 2;

    if (avg === targetAvg) {
      return true;
    } else if (avg > targetAvg) {
      right--;
    } else {
      left++;
    }
  }

  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([3, 3, 6, 12, 19], 8)); // false
console.log(averagePair([1, 2, 3], 2)); // true
console.log(averagePair([], 4)); // false
