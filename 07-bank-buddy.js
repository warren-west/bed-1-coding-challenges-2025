let bankBalance = 100;

function deposit(amount) {
    bankBalance += amount
}

function withdraw(amount) {
    bankBalance -= amount
}

function getBalance() {
    return `Current balance: NOK ${bankBalance.toFixed(2)}`
}

function applyInterest(percentage=0) {
    // check that percentage is a number
    if (isNaN(percentage)) {
        console.log(`Percentage should be a number`)
        return
    }

    let interest = bankBalance * percentage / 100

    if (bankBalance >= 0) {
        // add interest
        deposit(interest)
    } else {
        // subtract interest
        withdraw(interest)
    }
}

// 1. export a variable
const variableToExport = "Warren West"
// module.exports = variableToExport

// 2. export an object
const objectToExport = { name: "Warren", last: "West"}

// 3. export a function

// (Revealing) Module Pattern
module.exports = {
    
}
