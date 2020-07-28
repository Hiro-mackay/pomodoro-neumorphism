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
export declare type ITimerStatus = "pending" | "execute" | "standby";
/**
 *
 * pomodoro: ポモドーロ中
 * break: 休憩中
 *
 */
export declare type ITimerType = "pomodoro" | "break";
export declare class Timer {
    startAt: Date;
    isStop: boolean;
    status: ITimerStatus;
    timerType: ITimerType;
    totalMilliSeconds: number;
    ownerId: string;
    isLoop: boolean;
    constructor(timer: ITimerEntity);
    stop(): void;
    start(): void;
    reset(): void;
    changeTimerType(): void;
    loopToggle(): void;
    toObj(): ITimerEntity;
}
