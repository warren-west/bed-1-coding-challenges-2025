// 1. Install the testing package with "npm i jest"
// 2. Update the package.json "script" with:
//    "test": "jest"

// use the test() function to create a new test
// give it a name as the 1st param
// execute the test callback function as the 2nd param
const totalCups = require('./09-free-coffees')

// 
test('6 cups as an input returns 7 cups', () => {
    // AAA standard
    // Arrange (set up the test environment)
    const input = 6
    const expected = 7

    // Act (execute the function you're testing)
    const actual = totalCups(input)

    // Assert (check if the result matches what we expect)
    // jest gives us some helpful functions, namely expect()
    // and also some "matchers", in this case .toBe()
    expect(actual).toBe(expected)
})

// lastly, once we've finished writing our test(s)
// we can run them with the test script we defined earlier
// npm test