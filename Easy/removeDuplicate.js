var removeDuplicates = function(nums) {
    let j = 0;
    for (let i = 1; i < nums.length; i++) {
        // If current element is not equal
        // to next element then store that
        // current element
        if (nums[i] !== nums[j]) {
            // increment the value of j before it's used in the expression
            nums[++j] = nums[i];
        }
    }
    
    return j + 1;
};