# Add Up Numbers:

## Description:
Create a function that takes a number as an argument and returns the sum of all numbers up to and including the number. For example, 4 as an input should return 10 as an output because: 1 + 2 + 3 + 4 = 10.

## "Happy Day" Examples:
```javascript
addUp(4)    // 10
addUp(13)   // 91
addUp(600)  // 180300
```

## Error cases:
```javascript
addUp(1001)         // Error: "Number must be below 1000"
addUp("hello")      // Error: "Input needs to be a number"
addUp()             // Error: "Invalid input"
addUp(null)         // Error: "Invalid input"
addUp(undefined)    // Error: "Invalid input"
addUp(-10)          // Error: "Input number must be positive"
addUp({ n: "1" })   // Error: "Invalid input"
addUp([ 1, 2, 3 ])  // Error: "Invalid input"
```

## Notes:
Expect positive numbers between 1 and 1000.