/*
const removeFromArray = function(array, valueOne, valueTwo, multiples) {
    let index = 0;
    while (index < array.length) {
        if (array[index] === valueOne || array[index] === valueTwo || array[index] % multiples === 0) {
            array.splice(index, 1);
        } else {++index;}
    }
    return array;
};

console.log(removeFromArray(["hello",5,9,1,5,8,5], "hi", 5, 4));
*/

// we have 2 solutions here, an easier one and a more advanced one.
// The easiest way to get an array of the rest of the arguments that are passed to a function
// is using the rest operator. If this is unfamiliar to you look it up!
const removeFromArray = function (array, ...args) {
    // create a new empty array
    const newArray = [];
    // use forEach to go through the array
    array.forEach((item) => {
        // push every element into the new array
        // UNLESS it is included in the function arguments
        // so we create a new array with every item, except those that should be removed
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });
    // and return that array
    return newArray;
};

console.log(removeFromArray([2,5,9,1,5,8,5], "hi", 5, 2, 2));

// Do not edit below this line
module.exports = removeFromArray;
