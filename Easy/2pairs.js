// Find all the pairs of two integers in an unsorted array that sum up to a given S. 
// For example, if the array is [3, 5, 2, -4, 8, 11] and the sum is 7, your program should
//  return [[11, -4], [2, 5]] because 11 + -4 = 7 and 2 + 5 = 7.

let numberList = [3, 5, 2, -4, 8, 11];

var twoSum = function (numberList, k) {
    for (let i=0; i<numberList.length; i++){
        let firstElement = numberList[i];
        for(let j=i+1; j<numberList.length; j++){
            let secondElement = numberList[j];
            if (firstElement + secondElement === k){
                numberList.push([firstElement,secondElement])
            }
        }
    }
    return numberList
};

console.log(twoSum(numberList, 7));
