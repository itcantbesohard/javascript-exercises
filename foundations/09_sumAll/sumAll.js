const sumAll = function (beginning, end) {

    if (beginning < 0
        || end < 0
        || !Number.isInteger(beginning)
        || !Number.isInteger(end))
        return `ERROR`;

    let sum = 0;

    if (beginning > end) {
        const tmp = beginning;
        beginning = end;
        end = tmp;
    }
    for (i = beginning; i <= end; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
