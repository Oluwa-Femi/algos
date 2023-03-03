var arrayLetters = [];

var word = "madam";
var rword = "";
// from index 0 to the last index of the word
for (var i = 0; i < word.length; i++) {
    arrayLetters.push(word[i])
}
//POP OFF THE STACK IN REVERSE ORDER
for (var i = 0; i < word.length; i++) {
    //add one letter at a time by popping off the top letter
    //because they are put in order, they will be removed in reverse
    rword += arrayLetters.pop();
}
if (rword === word){
    console.log(word + " is a palindrome.")
} else {
    console.log(word + " is NOT a palindrome.")
}




//Is Palindrome a word??

function isPalindrome(word) {
    let left = 0;
    let right = word.length-1

    while (left < right) {
        if (word[left] !== word[right]) return false
        left++
        right--
    }
    
    return true
}

isPalindrome("neuquen")
isPalindrome("Buenos Aires")