const removeFromArray = function (array, ...args) {

    const newAray = [];

    array.forEach((item) => {
        if (!args.includes(item))
            newAray.push(item)
    });

    return newAray;

};

// Do not edit below this line
module.exports = removeFromArray;
