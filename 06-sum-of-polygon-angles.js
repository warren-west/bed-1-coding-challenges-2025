function sumPolygons(n) {
    return (n - 2) * 180
}

// console.log(sumPolygons(2)) // 0
// console.log(sumPolygons(3))
// console.log(sumPolygons(4))
// console.log(sumPolygons(6))

// const arrowPolygon = n => (n - 2) * 180;

// console.log(arrowPolygon(2)) // 0
// console.log(arrowPolygon(3))
// console.log(arrowPolygon(4))
// console.log(arrowPolygon(6))


// Warren's thoughts:


function sumPolygonSides(arrayOfSides) {
    // determine the number of sides from the input array (is it a triangle, square, etc?)
    const numberOfSides = arrayOfSides.length

    // determine what the internal angles should equal, based on the number of sides:
    let sumOfAngles = (numberOfSides - 2) * 180

    // calculate what the internal total angles are from the input array:
    let currentAngleTotal = arrayOfSides.reduce((prev, curr) => {
        return prev + curr
    }, 0)

    console.log(sumOfAngles)
    console.log(currentAngleTotal)

    // Check if they are equal, or not:
    // if (sumOfAngles === currentAngleTotal) {
    //     return `Checks out! 👍`
    // } else {
    //     return `Impossible! 😮`
    // }

    // ternary if statement   ?  :
    return (sumOfAngles === currentAngleTotal) ? `Checks out! 👍` : `Impossible! 😮`
}

// Examples:
console.log(sumPolygonSides([90, 90, 90, 90])) // checks out 👍
console.log(sumPolygonSides([60, 60, 60])) // checks out 👍
console.log(sumPolygonSides([100, 40, 40])) // checks out 👍
console.log(sumPolygonSides([100, 100, 40])) // impossible 😮
console.log(sumPolygonSides([100, 100, 100, 100])) // impossible 😮

module.exports = sumPolygonSides