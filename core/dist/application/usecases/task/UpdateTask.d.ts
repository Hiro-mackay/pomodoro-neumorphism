import { ITaskRepository } from "../../repositories";
import { Task } from "../../../domain";
export declare class UpdateTask {
    private taskRepository;
    constructor(taskRepository: ITaskRepository);
    update(task: Task): Promise<null>;
}
