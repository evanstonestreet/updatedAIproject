input.onButtonPressed(Button.A, function () {
    custom.trainingButtonA()
})
input.onButtonPressed(Button.B, function () {
    custom.trainingButtonB()
    //datalogger.includeTimestamp(FlashLogTimeStampFormat.None)
})
custom.trainingMode()
custom.turnMotor(50, 2)
basic.forever(function () {
    custom.foreverBlock()
})
