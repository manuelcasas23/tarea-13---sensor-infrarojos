IR.IR_callbackUser(function (código) {
    if (código == 17) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    } else if (código == 18) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    } else if (código == 19) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 25)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 25)
    } else if (código == 20) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 25)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 25)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 0)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    }
})
basic.forever(function () {
    basic.showNumber(IR.IR_read())
})
