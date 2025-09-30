// function declaration is the line where you set up your function
// for variable names we use camelCasing

// this is a VOID function (it doesn't return anything)
function testJackpot(theArray) {
    // get the length of theArray
    let arrLength = theArray.length

    // check that the array contains exactly 4 elements
    if (arrLength !== 4)
        return false

    // the array contains 4 elements, check that they're identical
    return theArray.every((item) => item === theArray[0])
}


console.log(testJackpot(["@", "@", "@", "@"])) // true
console.log(testJackpot(["W", "W", "W", "W"])) // true
console.log(testJackpot(["W", "W", "W", "W", "W"])) // false - too many
console.log(testJackpot(["W", "W", "W"])) // false - not enough