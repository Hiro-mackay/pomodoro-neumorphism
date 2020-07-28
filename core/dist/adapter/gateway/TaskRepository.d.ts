import { IFirestore } from "./IDBStore";
import { Task } from "../../domain/";
import { ITaskRepository } from "../../application/repositories";
export declare class TaskRepository implements ITaskRepository {
    private readonly db;
    constructor(firestore: IFirestore);
    execute(updated: Task): Promise<null>;
}
