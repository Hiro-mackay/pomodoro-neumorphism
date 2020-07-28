import { ITaskRepository } from "../../repositories";
import { Task } from "../../../domain";
export declare class DeleteTask {
    private taskRepository;
    constructor(taskRepository: ITaskRepository);
    delete(task: Task): Promise<null>;
}
