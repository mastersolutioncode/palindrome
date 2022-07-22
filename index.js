/* 
    Accept a string and return whether or not it's a palindrome. 
    Your solution cannot modify nor duplicate the string.

  example: 
    isPalindrome("level") -> true
    isPalindrome("beer") -> false
    isPalindrome("Mr. Owl Ate My Metal Worm") -> true
*/

function isSpecialCharacter(c) {
    let result = c.replace(/[^a-z0-9]/gi,'');
    return result != c;
}

function isPalindrome(input) {
    let j = input.length;
    for (let i = 0; i < j; i++) {
        if (isSpecialCharacter(input[i])) continue;

        while(j > i) {
            j --;
            if (isSpecialCharacter(input[j])) continue;
            if (input[i].toLowerCase() != input[j].toLowerCase()) return false;
            else break;
        }
    }
    
    return true;
}


console.log('level:', isPalindrome('level'))
console.log('beer:', isPalindrome('beer'))
console.log('Mr. Owl Ate My Metal Worm:', isPalindrome('Mr. Owl Ate My Metal Worm'))
