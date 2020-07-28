import { differenceInSeconds } from "date-fns";

export interface IComnTimer {
  startAt: Date;
  isStop: boolean;
  status: ITimerStatus;
  timerType: ITimerType;
  totalMilliSeconds: number;
  isLoop: boolean;
}

export interface ITimerEntity extends IComnTimer {
  ownerId: string;
}

/**
 *
 * pending: タイマー停止中
 * execute: 測定中
 * standby: 待機中
 *
 */
export type ITimerStatus = "pending" | "execute" | "standby";

/**
 *
 * pomodoro: ポモドーロ中
 * break: 休憩中
 *
 */
export type ITimerType = "pomodoro" | "break";

export class Timer {
  startAt: Date;
  isStop: boolean;
  status: ITimerStatus;
  timerType: ITimerType;
  totalMilliSeconds: number;
  ownerId: string;
  isLoop: boolean;

  constructor(timer: ITimerEntity) {
    this.startAt = timer.startAt;
    this.isStop = timer.isStop;
    this.status = timer.status;
    this.timerType = timer.timerType;
    this.totalMilliSeconds = timer.totalMilliSeconds;
    this.ownerId = timer.ownerId;
    this.isLoop = timer.isLoop;
  }

  stop(): void {
    const stopTime = new Date();
    this.totalMilliSeconds +=
      1000 * differenceInSeconds(stopTime, this.startAt) || 0;
    this.status = "pending";
    this.isStop = true;
  }

  start(): void {
    this.startAt = new Date();
    this.status = "execute";
    this.isStop = false;
  }

  reset(): void {
    this.totalMilliSeconds = 0;
    this.status = "standby";
    this.timerType = "pomodoro";
    this.isStop = true;
  }

  changeTimerType(): void {
    this.timerType = this.timerType === "pomodoro" ? "break" : "pomodoro";
    this.startAt = new Date();
    this.totalMilliSeconds = 0;
  }

  loopToggle(): void {
    this.isLoop = !this.isLoop;
  }

  toObj(): ITimerEntity {
    return {
      startAt: this.startAt,
      isStop: this.isStop,
      status: this.status,
      timerType: this.timerType,
      totalMilliSeconds: this.totalMilliSeconds,
      ownerId: this.ownerId,
      isLoop: this.isLoop,
    };
  }
}
