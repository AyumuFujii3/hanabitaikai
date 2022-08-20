IR_V15.onPressEvent(RemoteButton.CH_MINUS, function () {
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # # # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        # . . . #
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.pause(1000)
})
IR_V15.onPressEvent(RemoteButton.NUM2, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
IR_V15.onPressEvent(RemoteButton.CH, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . # . # .
        # . . . #
        # . . . #
        . # . # .
        . . # . .
        `)
})
IR_V15.onPressEvent(RemoteButton.NUM1, function () {
    basic.showNumber(5)
    basic.pause(200)
    basic.showNumber(4)
    basic.pause(200)
    basic.showNumber(3)
    basic.pause(200)
    basic.showNumber(2)
    basic.pause(200)
    basic.showNumber(1)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        # # . # #
        # # . # #
        . . . . .
        . # # # .
        `)
})
IR_V15.init(Pins.P0)
