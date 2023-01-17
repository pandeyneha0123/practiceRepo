//Leetcode two sum solution

var twoSum = function(nums, target) {
    for(var k=0;k<nums.length;k++){
        for(var s=k+1;s<nums.length;s++){
            if(nums[k]+nums[s]==target){
                return [k,s];
            }
        }
    }
};