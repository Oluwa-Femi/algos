let numbers = [1,2,3,4,5]

// function addArray(array) {
//   for (i=0; i<array.length; i++) {
//     console.log (array[i] + 1)
//   }
// }

// addArray(numbers);

numbers.forEach((number) => console.log(number + 1))

// function oddArray (array) {
//     let arrOdd = []
//     for (i=0; i<array.length; i++){
//         if (array[i] % 2 !== 0) {
//             arrOdd.push(array[i]);
//         }
//     }
//     return arrOdd;
// }

// const isOdd = oddArray(numbers)
// console.log(isOdd);

oddArray = numbers.filter((number) => (number% 2 !== 0))
console.log(oddArray);


const newArray = numbers.map((number) => number + 1);
console.log(numbers);