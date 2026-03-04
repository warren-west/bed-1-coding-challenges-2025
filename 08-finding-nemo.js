// You can write "official" documentation for your functions by typing /** on the line before the function
// Resource: https://jsdoc.app/about-getting-started

/**
 * Returns a string based on whether "Nemo" is found in the given parameter.
 * @param {String} sentence A sentence to be searched for "Nemo".
 * @returns "I found Nemo at 1" or "I can't find Nemo :("
 */
function findNemo(sentence) {
    // Basic validation
    if (!sentence) {
        throw new Error("Sentence needs to be a string!")
    }

    const position = sentence.split(' ').findIndex((word) => word === "Nemo")
    return position >= 0 ? `I found Nemo at ${position + 1}` : undefined // `I can't find Nemo :(`
}

module.exports = findNemo