const findNemo = require('./08-finding-nemo')

/* Examples:
INPUT:
"I am finding Nemo !" -> ['I', 'am', 'finding', 'Nemo', '!']
"Nemo is me"
"I Nemo am"
"There is only Dory in here"

OUTPUT:
I found Nemo at 4
I found Nemo at 1
I found Nemo at 2
I can't find Nemo :(
*/

// Nemo is found at a position that is > 1
test.skip('"Nemo" in position 4 returns: I found Nemo at 4', () => {
    expect(findNemo("I am finding Nemo !")).toBe("I found Nemo at 4")
})

// Nemo is found at position 1
test.skip('"Nemo" in position 1 returns: I found Nemo at 1', () => {
    // AAA standard -> Arrange, Act, Assert
    // Arrange:
    // Set up everything for the test to run (for the Act part)
    const input = "Nemo is my favorite fish"
    const expected = "I found Nemo at 1"

    // Act:
    const actual = findNemo(input) // execute the function to be tested

    // Assert:
    expect(actual).toBe(expected) // make the assertion
})

// Nemo doesn't exist
test.skip('"Nemo" is not found in the sentence', () => {
    // Arrange
    const input = "There is only Dory in here"

    // Act
    const actual = findNemo(input)

    // Assert
    expect(actual).toBeUndefined() // using a different matcher
})

/* EDGE CASES */

// Nemo appears more than once in the sentence
test.skip('Nemo appears more than once in the sentence', () => {
    // Arrange
    const input = "The best friend of Nemo is Nemo"
    const expected = "I found Nemo at 5" // 7 is wrong!

    // Act
    const actual = findNemo(input)

    // Assert
    expect(actual).toBe(expected)
})

// The sentence is a Boolean value (false)
test.skip('The sentence is a Boolean value (false)', () => {
    // Arrange
    const input = false
    const expected = "Sentence needs to be a string!"

    // Act & Assert
    expect(() => findNemo(input)).toThrow(expected)
})

// The sentence is undefined
test('The sentence is undefined', () => {
    // Arrange
    const input = undefined
    const expected = "Sentence needs to be a string!"

    // Act & Assert
    expect(() => findNemo(input)).toThrow(expected)
})