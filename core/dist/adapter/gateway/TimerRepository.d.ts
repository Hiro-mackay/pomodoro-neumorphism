import { ITimerRepository } from "../../application/repositories/ITimerRepository";
import { IFirestore } from "./IDBStore";
import { Timer } from "../../domain/";
export declare class TimerRepository implements ITimerRepository {
    private readonly db;
    constructor(firestore: IFirestore);
    execute(timer: Timer): Promise<null>;
}
