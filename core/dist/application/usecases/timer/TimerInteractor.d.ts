import { Timer } from "../../../domain";
import { ITimerRepository } from "../../repositories";
export declare class TimerInteractor {
    private timerRepository;
    constructor(TimerRepository: ITimerRepository);
    start(timer: Timer): Promise<Timer>;
    stop(timer: Timer): Promise<Timer>;
    reset(timer: Timer): Promise<Timer>;
    LoopToggle(timer: Timer): Promise<Timer>;
    changeTimerType(timer: Timer): Promise<Timer>;
}
