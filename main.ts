makerbit.onIrButton(IrButton.Number_3, IrButtonAction.Pressed, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
makerbit.onIrButton(IrButton.Number_0, IrButtonAction.Pressed, function () {
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
makerbit.onIrButton(IrButton.Number_1, IrButtonAction.Pressed, function () {
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
makerbit.onIrButton(IrButton.Number_2, IrButtonAction.Pressed, function () {
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
makerbit.connectIrReceiver(DigitalPin.P0, IrProtocol.Keyestudio)
