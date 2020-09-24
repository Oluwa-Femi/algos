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
