const sumAll = function(num1, num2) {
    if ( typeof num1 !== "number" || typeof num2 !== "number" ) return 'ERROR';
    if ( num1 < 0 || num2 < 0) return "ERROR";
    let min = Math.min(num1, num2);
    let max = Math.max(num1, num2);
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum = sum + i;
    }
    return sum;
};

console.log(sumAll(10,[100, 1000]));

// Do not edit below this line
module.exports = sumAll;
