import { ITaskRepository } from "../../repositories";
import { Task } from "../../../domain";

export class UpdateTask {
  private taskRepository: ITaskRepository;
  constructor(taskRepository: ITaskRepository) {
    this.taskRepository = taskRepository;
  }

  async update(task: Task): Promise<null> {
    try {
      await this.taskRepository.execute(task);
      return null;
    } catch (error) {
      throw error;
    }
  }
}
