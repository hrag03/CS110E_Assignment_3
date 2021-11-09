
function reverseNumber(daffy_duck) {
    let reverse = 0;
    let remainder = 0;
    while (daffy_duck > 0) {
        remainder = daffy_duck % 10;
        reverse = reverse * 10 + remainder;
        daffy_duck = Math.floor(daffy_duck / 10);
    }
    return reverse;
}

function isPalindrome(bugs_bunny) {
    if (bugs_bunny == reverseNumber(bugs_bunny)){
    return true;
    } else {
    return false;
    }
}
console.log(reverseNumber(456));
console.log(isPalindrome(121));