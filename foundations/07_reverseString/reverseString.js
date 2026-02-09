const reverseString = function (text) {
    let textLength = text.length;
    let reversedString = "";

    if (textLength > 0) {
        for (i = 0; i = textLength; i++) {
            textLength--;
            let letter = text.charAt(textLength);
            reversedString += letter;
        }
        return reversedString
    } else
        return "";

};

// Do not edit below this line
module.exports = reverseString;
