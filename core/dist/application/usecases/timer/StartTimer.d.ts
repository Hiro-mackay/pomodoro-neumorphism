import { Timer } from "../../../domain";
import { ITimerRepository } from "../../repositories";
export declare class StartTimer {
    private timerRepository;
    constructor(TimerRepository: ITimerRepository);
    private exists;
    start(ownerId: string, currentTimer?: Timer): Promise<Timer>;
}
