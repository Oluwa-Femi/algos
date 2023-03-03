// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// SOLUTION

listNum = [10, 15, 3, 7];

let findPair = function (listNum, k){
    for (let i=0; i<listNum.length; i++) {
        for (let j=i+1; j<listNum.length; j++) {
        if (listNum[i] + listNum[j] === k){
           return true;
        }
    }
    }
     return false;
}

console.log(findPair(listNum, 17));



// USING HASH MAP
arr = [10, 15, 3, 7];

function hasSumK(arr, k) {
    hashMap = {};
    for (let value of arr) {
        if (hashMap[value]) { return true;} else { hashMap[k - value] = true };
    }
    return false;
}

console.log(hasSumK(arr, 13));


// Write a function that takes two parameters: A non-empty array of distinct integers and an integer representing a target sum. 
// If any two numbers in the array sum up to the target sum, the function should return them in an array. 
// If no two numbers sum up to the target sum, the function should return an empty array.

function twoNumberSum(array, targetSum) {
    let newArr = [];
    for (i=0; i<array.length; i++){
        for (var j=i+1; j<array.length; j++){
            if (array[i] + array[j] === targetSum){
                newArr.push(array[i])
                newArr.push(array[j])
                return newArr
            }
        }
    }
    return []
}

console.log(twoNumberSum([1,2,3,4,5], 5));
console.log(twoNumberSum([9,1,3,4,5], 6));
console.log(twoNumberSum([1,2,3,4,5], 10))


const twoSum = (nums, target) => {
    let numsMap = new Map();
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        numsMap.set(target - nums[i], i);
    }
    for (let i = 0; i < len; i++) {
        let counterIndex = numsMap.get(nums[i]);
        if (numsMap.has(nums[i]) && i !== counterIndex) return [i, counterIndex];
    }
}