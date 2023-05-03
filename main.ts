IR.IR_callbackUser(function (código) {
    if (código == 17) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    } else if (código == 18) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    } else if (código == 19) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 25)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 25)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        basic.pause(100)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        basic.pause(100)
    } else if (código == 20) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 25)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 25)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        basic.pause(100)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        basic.pause(100)
    } else if (código == 22) {
        music.playTone(784, music.beat(BeatFraction.Quarter))
    } else if (maqueen.Ultrasonic(PingUnit.Centimeters) <= 10) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 0)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 0)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showString("nº tarea y nombre")
    basic.pause(500)
    basic.showString("datos alumno")
    basic.pause(500)
    basic.showString("curso")
})
basic.forever(function () {
    basic.showNumber(IR.IR_read())
})
