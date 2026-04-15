const addUp = require('./10-add-numbers')

/*=======================
=  HAPPY DAY SCENARIOS  =
=======================*/
test('input the number 4 should return 10', () => {
    // Arrange
    const input = 4
    const expected = 10
    
    // Act
    const actual = addUp(input)
    
    // Assert
    expect(actual).toBe(expected)
})

/*===================
=  ERROR SCENARIOS  =
===================*/

test('undefined input should throw error', () => {
    // Arrange
    const input = undefined
    const expected = "Invalid input"

    // Act & Assert
    expect(() => addUp(input)).toThrow(expected)
})

test('string input should throw error', () => {
    // Arrange
    const input = "Hello world"
    const expected = "Input needs to be a number"

    // Act & Assert
    expect(() => addUp(input)).toThrow(expected)
})

test('Negative number input should throw error', () => {
    // Arrange
    const input = -5
    const expected = "Input number must be positive"

    // Act & Assert
    expect(() => addUp(input)).toThrow(expected)
})