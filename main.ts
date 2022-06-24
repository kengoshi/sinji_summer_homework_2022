IR.IR_callbackUser(function (message) {
    if (message == 4) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
        maqueen.motorStop(maqueen.Motors.M1)
        basic.showArrow(ArrowNames.West)
    } else if (message == 6) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        maqueen.motorStop(maqueen.Motors.M2)
        basic.showArrow(ArrowNames.East)
    } else if (message == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
        basic.showArrow(ArrowNames.North)
    } else if (message == 9) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
        basic.showArrow(ArrowNames.South)
    } else if (message == 5) {
        maqueen.motorStop(maqueen.Motors.All)
        basic.showIcon(IconNames.No)
    } else if (message == 12) {
        while (true) {
            if (IR.IR_read() != 12) {
                maqueen.motorStop(maqueen.Motors.All)
                break;
            }
            if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
                maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
            } else {
                if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
                    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
                    maqueen.motorStop(maqueen.Motors.M1)
                    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
                        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
                        maqueen.motorStop(maqueen.Motors.M1)
                    }
                } else {
                    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
                        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
                        maqueen.motorStop(maqueen.Motors.M2)
                        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
                            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
                            maqueen.motorStop(maqueen.Motors.M2)
                        }
                        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
                            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
                        } else {
                            maqueen.motorStop(maqueen.Motors.M2)
                        }
                    }
                }
            }
        }
    } else {
        basic.showIcon(IconNames.SmallDiamond)
    }
})
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.OBJECTCLASSIFICATION)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear(2, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.showNumber(1)
    } else if (huskylens.isAppear(3, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
    	
    } else if (huskylens.isAppear(4, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
    	
    } else if (huskylens.isAppear(5, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        maqueen.motorStop(maqueen.Motors.All)
    } else if (false) {
        music.playTone(196, music.beat(BeatFraction.Double))
    } else {
        basic.clearScreen()
    }
    basic.pause(500)
})
