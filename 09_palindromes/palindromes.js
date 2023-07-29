const palindromes = function (str) {
    const arr = str.split("");
    const letters = arr.filter(char => /^[a-zA-Z0-9]+$/.test(char));
    const forward = letters.join("");
    const reversed = letters.reverse().join("");
    return reversed.toLowerCase() === forward.toLowerCase() ;
};

// Do not edit below this line
module.exports = palindromes;
