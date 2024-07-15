const repeatString = function(string, num) {
    let finalString = "";
    if (num>=0) {
        for (let i = 0; i < num; i++) {
            finalString = finalString + string;
        }
        return finalString;
    } else { return "ERROR" }
};

// Do not edit below this line
module.exports = repeatString;
