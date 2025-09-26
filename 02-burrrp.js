// burp(5) -> "Burrrrrp"

function burp(num) {
    // Create the start of the output string
    let message = "Bu"

    for (let i = 0; i < num; i++) {
        // Add "r"s to the output string
        message += "r"
    }

    // Add the end of the output string
    console.log(message + "p")
}

burp(5)
burp(3)
burp(1)

// Shift lines: Alt + ⬆️ / ⬇️
// Copy line up / down: Alt + Shift + ⬆️ / ⬇️
// Emojis: Win + .