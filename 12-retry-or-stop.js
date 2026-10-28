/**
 * 
Edabit code challenge:
 
function shouldRetry(failed, attempts, limit) {

  // Write your code here.

  if (failed === true && attempts < limit) {

    return true;

  }

  return false;

}
 
 */

const shouldRetry = (failed, attempts, limit) => failed && attempts < limit

console.log(shouldRetry(true, 2, 3))
console.log(shouldRetry(false, 2, 3))
console.log(shouldRetry(true, 3, 3))




function goOutside(isSunny, isDaytime) {
    // I will only go outside if it sunny
    // and if it's day time

    // Option A:
    if (isSunny === true && isDaytime === true) {
        return true
    } else {
        return false
    }

    // Option B:
    if (isSunny && isDaytime) {
        return true
    } else {
        return false
    }

    // Option C:
    if (!isSunny || !isDaytime) {
        return false
    } else {
        return true
    }

    // Option D:
    return isSunny && isDaytime
}

console.log(goOutside(true, true))      // true
console.log(goOutside(true, false))     // false
console.log(goOutside(false, true))     // false
console.log(goOutside(false, false))    // false

