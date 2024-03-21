input.onButtonPressed(Button.A, function () {
    custom.trainingButtonA()
})
input.onButtonPressed(Button.B, function () {
    custom.trainingButtonB()
})
custom.trainingMode()
custom.turnMotor(50, 5)
basic.forever(function () {
    custom.foreverBlock()
})
