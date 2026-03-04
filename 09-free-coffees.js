// examples:
// input 6   -> 7
// input 12  -> 14
// input 213 -> 248 

function totalCups(n) {
    // for every 6 cups we buy, we get a 7th free
    const div = n / 6

    // return Math.trunc(div + n)
    return 0
}

module.exports = totalCups

// console.log(totalCups(6)) // 7
// console.log(totalCups(12)) // 14
// console.log(totalCups(213)) // 248