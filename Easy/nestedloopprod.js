let arrayNum = [[1,2], [3,4,5], [6,7,8], [9,10]]
function arrSol (arr) {
    var product = 1;
    for (i=0; i<arr.length; i++){
        for(j=0; j<arr[i].length; j++){
            product *= arr[i][j]
        }
    }
    return product;
}

let nestedArray = arrSol(arrayNum);
console.log(nestedArray);