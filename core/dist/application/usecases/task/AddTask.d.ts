import { ITaskRepository } from "../../repositories";
import { Task } from "../../../domain";
export declare class AddTask {
    private taskRepository;
    constructor(taskRepository: ITaskRepository);
    add(task: Task): Promise<null>;
}
