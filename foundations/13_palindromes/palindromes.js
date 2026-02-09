const palindromes = function (text) {

    let cleanText = text
        .toLowerCase()
        .replace(/[^a-z0-9]/gi, "");

    let reverseText = cleanText.split("").reverse().join("");

    return cleanText === reverseText;

};

// Do not edit below this line
module.exports = palindromes;
