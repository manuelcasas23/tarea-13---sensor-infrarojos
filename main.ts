IR.IR_callbackUser(function (código) {
    if (código == 17) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    } else if (código == 18) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
    } else if (código == 19) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 25)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    } else if (código == 20) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 25)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 0)
    }
})
basic.forever(function () {
    basic.showNumber(IR.IR_read())
})
