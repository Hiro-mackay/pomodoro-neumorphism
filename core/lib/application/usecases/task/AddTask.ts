import { ITaskRepository } from "../../repositories";
import { Task } from "../../../domain";

export class AddTask {
  private taskRepository: ITaskRepository;
  constructor(taskRepository: ITaskRepository) {
    this.taskRepository = taskRepository;
  }

  async add(task: Task): Promise<null> {
    try {
      await this.taskRepository.execute(task);
      return null;
    } catch (error) {
      throw error;
    }
  }
}
