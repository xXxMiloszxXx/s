function labirynt () {
    y = 4
    x = 2
    while (true) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
        basic.pause(1000)
        if (true) {
            if (maqueen.Ultrasonic(PingUnit.Centimeters) <= 10) {
                led.plot(x, y)
                maqueen.motorStop(maqueen.Motors.All)
                break;
            } else {
                maqueen.motorStop(maqueen.Motors.All)
                y += -1
                basic.pause(100)
            }
        }
    }
}
let x = 0
let y = 0
labirynt()
maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
basic.pause(1000)
maqueen.motorStop(maqueen.Motors.M1)
basic.pause(5000)
labirynt()
