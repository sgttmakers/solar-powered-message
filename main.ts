input.onButtonPressed(Button.A, function () {
    message = "Turn on the Fan"
    basic.showString(message)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    message = "Break!"
    basic.showString(message)
    basic.pause(1000)
    basic.clearScreen()
})
let solarpowerinput = 0
let message = ""
message = "Hello"
basic.forever(function () {
    solarpowerinput = input.lightLevel()
    if (solarpowerinput > 128) {
        basic.showString(message)
        basic.pause(1000)
        basic.clearScreen()
    }
    basic.pause(5000)
})
