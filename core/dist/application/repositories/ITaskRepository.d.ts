import { Task } from "../../domain";
export declare abstract class ITaskRepository {
    abstract execute(task: Task): Promise<null>;
}
