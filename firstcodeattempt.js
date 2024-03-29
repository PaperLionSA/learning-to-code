//Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//
//     You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
//     Example:
//
// Given nums = [2, 7, 11, 15], target = 9,
//
//     Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//const twoSum = (nums, target) => {
//     var map = [];
//
//     for (var i = 0; i < nums.length; i++) {
//         for (var j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 map.push(i);
//                 map.push(j);
//             }
//         }
//     }
// };
var twoSum = (nums, target) => {
    const map = new Map();
    for(let i in nums){
        if(map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        } else {
            map.set(nums[i],i);
        }
    }
};
let nums = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(nums,target));   
