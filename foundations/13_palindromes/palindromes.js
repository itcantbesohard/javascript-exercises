const palindromes = function (text) {

    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    let cleanText = text
        .toLowerCase()
        .split('')
        .filter((c) => alphanumerical.includes(c))
        .join('');

    let reverseText = cleanText.split("").reverse().join("");

    return cleanText === reverseText;

};

// Do not edit below this line
module.exports = palindromes;
