import { Task } from "../../domain";

export abstract class ITaskRepository {
  abstract async execute(task: Task): Promise<null>;
}
