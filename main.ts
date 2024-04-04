input.onButtonPressed(Button.A, function () {
    custom.trainingButtonA()
})
// datalogger.includeTimestamp(FlashLogTimeStampFormat.None)
input.onButtonPressed(Button.B, function () {
    custom.trainingButtonB()
    custom.trainingButtonB()
})
custom.trainingMode()
custom.turnMotor(50, 2)
basic.forever(function () {
    custom.foreverBlock()
})
