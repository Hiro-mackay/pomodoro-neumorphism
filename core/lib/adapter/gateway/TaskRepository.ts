import { IFirestore } from "./IDBStore";
import { Task } from "../../domain/";
import { ITaskRepository } from "../../application/repositories";
import { userPathQuery } from "../../utils/constants/dbpath";

export class TaskRepository implements ITaskRepository {
  private readonly db: IFirestore;

  constructor(firestore: IFirestore) {
    this.db = firestore;
  }

  async execute(updated: Task): Promise<null> {
    try {
      if (!updated || !updated.ownerId) {
        throw new Error("not found task repository");
      }
      await this.db.updateDoc(userPathQuery(updated.ownerId), {
        task: { ...updated },
      });
      return null;
    } catch (error) {
      throw error;
    }
  }
}
