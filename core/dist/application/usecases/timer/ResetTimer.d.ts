import { Timer } from "../../../domain";
import { ITimerRepository } from "../../repositories";
export declare class ResetTimer {
    private timerRepository;
    constructor(TimerRepository: ITimerRepository);
    private exists;
    reset(ownerId: string, currentTimer?: Timer): Promise<Timer>;
}
