const reverseString = function(string) {
    string = string.split('').reverse().join('');
    return string;
    //solution
    // return string.split('').reverse().join('');
};

console.log(reverseString(""));

// Do not edit below this line
module.exports = reverseString;
