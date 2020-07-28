import { Timer } from "../../domain";
export declare abstract class ITimerRepository {
    abstract execute(timer: Timer): Promise<null>;
}
