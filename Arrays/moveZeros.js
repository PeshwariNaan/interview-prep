// If there are any zeros in the array - move them all to the end of the array

const numArr = [0, 1, 2, 3, 4, 0, 5]


//THis solution has RTC of O(n + m)
const moveZeroes = function(nums) {

    let nonZeroIndex = 0;

    for(let i=0; i < nums.length; i++){
        console.log('first 4 loop:', i)
        if(nums[i] != 0) {
            nums[nonZeroIndex] = nums[i];
            console.log('nums first 4 loop', nums)
            nonZeroIndex ++;
        }
    }

    for(let i = nonZeroIndex; i < nums.length; i++) {
        console.log('2nd 4 loop #:', i)
        nums[i] = 0;
        console.log('nums 2nd 4 loop', nums)
    }
    return nums
};

console.log(moveZeroes(numArr))
