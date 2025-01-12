const palindromes = function (palindromeString) {
    const normalizeString = palindromeString.toLowerCase().replace(/[^a-z0-9]/g,"");
    let reverseString = normalizeString.split("").reverse().join("");

    if (normalizeString === reverseString) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
