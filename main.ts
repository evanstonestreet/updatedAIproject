input.onButtonPressed(Button.A, function () {
    neupulatorAI.trainingButtonA()
})
// datalogger.includeTimestamp(FlashLogTimeStampFormat.None)
input.onButtonPressed(Button.B, function () {
    neupulatorAI.trainingButtonB()
    custom.trainingButtonB()
})
neupulatorAI.trainingMode()
neupulatorAI.turnMotor(50, 2)
basic.forever(function () {
    neupulatorAI.foreverBlock()
})
