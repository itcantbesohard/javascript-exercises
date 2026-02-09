const fibonacci = function (n) {

    if (!Number.isInteger(n)) {
        n = parseInt(n);
    }

    if (n < 0) return "OOPS";
    if (n == 0) return 0;
    if (n == 1) return 1;

    let first = 0;
    let second = 1;
    let fib = 1;

    for (let i = 2; i < n; i++) {
        fib = first + second;
        second = fib;
    }

    return fib;

};

// Do not edit below this line
module.exports = fibonacci;
