
/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {

    // training object that keeps track of all variables needed for training
    let training = {
        status: false, // determines whether or not we are in training mode (as opposed to testing)
        currentlyRunning: false, // true if we are in the middle of a training session and data is being recorded
        numOfTrainingSessions: 0, // gives number of training sessions (inputed by user as a block parameter)
        sessionNum: 0, // keeps track of how many sessions we have trained already
        dataSessions: [] as number[][], // 2D array that stores each 1D array of data associated with each training session
        currentSession: [] as number[], // 1D array that temporarily stores data for each session before pushing to dataSessions and clearing itself
        activity: "", // mo for motor and mu for music
        moreSessions: function(){ // returns true if we still have more sessions to train
            return training.sessionNum < training.numOfTrainingSessions
        }
    }
    

    //% block = "foreverBlock"
    export function foreverBlock(): void {
        if (training.status && training.currentlyRunning){
            if (training.moreSessions()){
                // PLACEHOLDER CODE BELOW, TO BE REPLACED WITH EMG CODE
                serial.writeLine(input.acceleration(Dimension.X) + " ")
                training.currentSession.push(input.acceleration(Dimension.X))
            }

        }
    }


    //% block = "trainingMode"
    // To be dragged into the onStart block
    export function trainingMode(): void {
        training.status = true;
        serial.writeLine("Training mode turned on")
    }

    //% block = "trainingButtonA"
    export function trainingButtonA(): void{
        if (training.status && !training.currentlyRunning){
            training.currentlyRunning = true
        }
    }

    //% block = "trainingButtonB"
    export function trainingButtonB(): void {
        serial.writeLine("Button B is pressed")
        if (training.status && training.currentlyRunning) {
            training.currentlyRunning = false
            training.dataSessions.push(training.currentSession)
            training.currentSession = []
            training.sessionNum += 1
            if (!training.moreSessions()){
                serial.writeLine("You have completed your training with " + training.numOfTrainingSessions + " sessions")
            }
        }
    }
    
    //% block="Turn motor by %degrees degrees (Train for %numSessions sessions)"
    export function turnMotor (degrees: number, numSessions: number) {
        //serial.writeLine("Turning motor by " + degrees + " degrees")
        training.numOfTrainingSessions = numSessions
        training.activity = "mo"
    }
}
