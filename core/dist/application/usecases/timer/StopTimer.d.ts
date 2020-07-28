import { Timer } from "../../../domain";
import { ITimerRepository } from "../../repositories";
export declare class StopTimer {
    private timerRepository;
    constructor(TimerRepository: ITimerRepository);
    stop(timer: Timer): Promise<Timer>;
}
