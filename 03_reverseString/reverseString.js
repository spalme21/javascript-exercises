const reverseString = function(string) {
    const stringArray = string.split("");
    let reversedArray = [];
    for (let char of stringArray) {
        reversedArray.unshift(char);
    }
    return reversedArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
