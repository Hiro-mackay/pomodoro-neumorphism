import { ITimerRepository } from "../../application/repositories/ITimerRepository";
import { IFirestore } from "./IDBStore";
import { Timer } from "../../domain/";
import { userPathQuery } from "../../utils/constants/dbpath";

export class TimerRepository implements ITimerRepository {
  private readonly db: IFirestore;

  constructor(firestore: IFirestore) {
    this.db = firestore;
  }

  async execute(timer: Timer): Promise<null> {
    try {
      if (!timer || !timer.ownerId) {
        throw new Error("not found timer repository");
      }
      await this.db.updateDoc(userPathQuery(timer.ownerId), {
        timer: { ...timer },
      });
      return null;
    } catch (error) {
      throw error;
    }
  }
}
