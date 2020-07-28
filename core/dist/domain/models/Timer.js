"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timer = void 0;
var date_fns_1 = require("date-fns");
var Timer = /** @class */ (function () {
    function Timer(timer) {
        this.startAt = timer.startAt;
        this.isStop = timer.isStop;
        this.status = timer.status;
        this.timerType = timer.timerType;
        this.totalMilliSeconds = timer.totalMilliSeconds;
        this.ownerId = timer.ownerId;
        this.isLoop = timer.isLoop;
    }
    Timer.prototype.stop = function () {
        var stopTime = new Date();
        this.totalMilliSeconds +=
            1000 * date_fns_1.differenceInSeconds(stopTime, this.startAt) || 0;
        this.status = "pending";
        this.isStop = true;
    };
    Timer.prototype.start = function () {
        this.startAt = new Date();
        this.status = "execute";
        this.isStop = false;
    };
    Timer.prototype.reset = function () {
        this.totalMilliSeconds = 0;
        this.status = "standby";
        this.timerType = "pomodoro";
        this.isStop = true;
    };
    Timer.prototype.changeTimerType = function () {
        this.timerType = this.timerType === "pomodoro" ? "break" : "pomodoro";
        this.startAt = new Date();
        this.totalMilliSeconds = 0;
    };
    Timer.prototype.loopToggle = function () {
        this.isLoop = !this.isLoop;
    };
    Timer.prototype.toObj = function () {
        return {
            startAt: this.startAt,
            isStop: this.isStop,
            status: this.status,
            timerType: this.timerType,
            totalMilliSeconds: this.totalMilliSeconds,
            ownerId: this.ownerId,
            isLoop: this.isLoop,
        };
    };
    return Timer;
}());
exports.Timer = Timer;
