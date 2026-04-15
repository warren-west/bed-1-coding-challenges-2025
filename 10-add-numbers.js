const { NegativeNumberError } = require('./customerErrors')

function addUp(number) {
    // basic validation
    if (!number) { // empty, undefined, null
        throw new Error("Invalid input")
    }

    if (isNaN(number)) { // number is not a number (string, Boolean, etc.)
        throw new Error("Input needs to be a number")
    }

    if (number < 0) { // number is negative
        throw new NegativeNumberError("Input number must be positive")
    }

    let sum = 0

    for (let i = 1; i <= number; i++) {
        sum += i
    }

    return sum
}

function addUpWhile(n) {
    let count = 0
    let sum = 0

    while(count <= n) {
        sum += count
        count++
    }

    return sum
}

const addUpArrow = (n) => n * (n + 1) / 2

module.exports = addUp // export the function to use in test file