"use strict";

/** This should take an array of non-zero numbers,
 *  and separates the positive numbers to the left and the negative numbers to the right.
 *  Returns the "separated" original array.
 *
 *  The positive numbers and negative numbers need not be in sorted order.
 *  The problem should be done in place, and the function should return the original array, not a copy.
 */
function separatePositive(nums) {

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {


    if (nums[left] > 0 && nums[right] > 0)
      left--;
    } else if (nums[left] > 0 && nums[right] < 0) {
      left++;
    } else if (nums[left] < 0 && nums[right] > 0) {
      const leftSwap = left;

    }
  }

  return nums;

// separatePositive([2, -1, -3, 6]);         // [2, 6, -3, -1]
// separatePositive([-5, 5]);                // [5, -5]
// separatePositive([1, 2, 3]);              // [1, 2, 3]
