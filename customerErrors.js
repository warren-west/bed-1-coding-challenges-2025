class NegativeNumberError extends Error {
    constructor(message) {
        super(message)
    }
}

module.exports = { NegativeNumberError, }