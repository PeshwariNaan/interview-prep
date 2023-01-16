//Find the sub-array in the full array that sums up to the highest number

//Brute force approach - bigO of O(n^2) and time complexity of O(1)
const maxSubArray = (nums) => {
  let maxSum = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    let currentSubArraySum = 0;

    for (let j = i; j < nums.length; j++) {
      currentSubArraySum += nums[j];
      maxSum = Math.max(maxSum, currentSubArraySum);
    }
  }

  return maxSum;
};

//Divide and conquer approach - uses recursion and is hard to understand

var maxSubArray1 = function (nums) {
  // Return the results of the recursive function
  return findMaxSumInArr(nums);

  // Recursive function that will divide and conquer to find the maximum sum from a subarray of the array provided as a parameter
  function findMaxSumInArr(arr) {
    // BASE CASES:
    // if there is only one arr item, then you can simply return that value
    if (arr.length === 1) {
      return arr[0];
    }

    /* if there isn't an arr item, then return -Infinity (we need a valid number for the calculations below. 
		Since JS can only store numbers > -Infinity, -Infinity will never be the max) */
    if (arr.length === 0) {
      return -Infinity;
    }

    // Declare zero-indexed length and midpoint
    let length = arr.length - 1;
    let mid = Math.floor(length / 2);

    // DIVIDE: Recursively find max sum in the left and right sub arrays
    let lMaxSumInSubArr = findMaxSumInArr(arr.slice(0, mid));
    let rMaxSumInSubArr = findMaxSumInArr(arr.slice(mid + 1, length + 1));

    /* MERGE: The divide step gave use the max sum on the left and right side, but we still need to account
		for the possibility of a contiguous array that goes from left to right through the midpoint */

    // Declare variables to record the maximum contiguous sums for each side
    let lMaxContiguousSum = 0,
      rMaxContiguousSum = 0;

    // On the left side, find sum of contiguous array and keep an updated record of the maximum
    /* (NOTE: in order to account for contiguous arrays that traverse the midpoint, start the search from
		the midpoint - 1 index and traverse leftwards towards index 0. This directionality guarantees that
		a contiguous array traversing the midpoint will be able to add the midpoint itself and the right side's
		contiguous arr [this is exactly what is checked in the final return statement below]) */
    for (let i = mid - 1, currContiguousSum = 0; i >= 0; i--) {
      currContiguousSum += arr[i];
      lMaxContiguousSum = Math.max(lMaxContiguousSum, currContiguousSum);
    }

    // On the left side, find sum of contiguous array and keep an updated record of the maximum
    /* (NOTE: in accordance with the last note, to account for sub arrays that traverse the midpoint, 
		start the search from the midpoint + 1 index and traverse rightwards */
    for (let i = mid + 1, currContiguousSum = 0; i <= length; i++) {
      currContiguousSum += arr[i];
      rMaxContiguousSum = Math.max(rMaxContiguousSum, currContiguousSum);
    }

    /* RETURN the max sum from the current array: either from the left side, right side, or a contiguous
		sub arrary traversing from left to right through the midpoint */
    return Math.max(
      // The maximum sum from a contiguous subarray that traverses the midpoint
      lMaxContiguousSum + arr[mid] + rMaxContiguousSum,
      // The max sum from each side (whether it was a single value or a contiguous sum)
      lMaxSumInSubArr,
      rMaxSumInSubArr
    );
  }
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const nums2 = [-2, -1, -4, -1]

var maxSubArray2 = function (nums) {
  let max = nums[0];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum > max) {
      max = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
};

const maxSubArray3 = (nums) => {
  let currSum = 0;
  let maxSum = -Infinity;
  for (i = 0; i < nums.length; i++) {
    currSum = Math.max(0, currSum);
    console.log(' currSum: ', currSum);
    currSum += nums[i];
    console.log('second currsum', currSum);
    maxSum = Math.max(maxSum, currSum);
    console.log('maxSumm: ', maxSum);
  }
  return maxSum;
};

console.log(maxSubArray3(nums2));
