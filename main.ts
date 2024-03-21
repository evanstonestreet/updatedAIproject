input.onButtonPressed(Button.A, function () {
    custom.trainingButtonA()
})
input.onButtonPressed(Button.B, function () {
    custom.trainingButtonB()
    datalogger.log(datalogger.createCV("acceleration", 16))
})
custom.trainingMode()
custom.turnMotor(50, 2)
datalogger.setColumnTitles(
"",
"",
"",
""
)
basic.forever(function () {
    custom.foreverBlock()
})
