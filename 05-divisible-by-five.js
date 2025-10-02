function divisibleByFive(num) {
    // check if num mod 5 is 0
    // this means that if we divide num by 5, there is no "remainder"

    // e.g. 55 / 5 -> 11.0 -> true
    // but 13 / 5 -> 2.384756294365 -> false

    // if (num % 5 === 0)
    //     return true
    // else
    //     return false
    
    // this can be simplified into:
    return num % 5 === 0
}


function divByFiveMath(num) {

    // divide num by 5, and save the result to a variable
    // take the result, and "chop off" the decimal points
    // if that result is the same as the original number
    // it is divisible by 5

    let numDiv2 = num / 5

    let numDiv2NoDecimals = Math.trunc(numDiv2)

    console.log(`num: ${num}`)
    console.log(`numDiv2: ${numDiv2}`)
    console.log(`numDiv2NoDecimals: ${numDiv2NoDecimals}`)
    
    // turn this into 1 line of code
    // if (numDiv2 !== numDiv2NoDecimals)
    //     return false
    // else
    //     return true

    return numDiv2 === numDiv2NoDecimals
}

console.log(divByFiveMath(11))
















// console.log(divisibleByFive(55)) // -> true
// console.log(divisibleByFive(66)) // -> false
// console.log(divisibleByFive(100)) // -> true
// console.log(divisibleByFive(-5)) // -> true
// console.log(divisibleByFive(-3)) // -> false

// console.log(`5 % 2 = ${5%2}`)
// console.log(`6 % 2 = ${6%2}`)
// console.log(`11 % 3 = ${11%3}`)


// Integer vs Float / Double / Real number
// Integer is a whole number (no decimals)
// The others have decimal points
// JavaScript doesn't differentiate between them, they're just Numbers