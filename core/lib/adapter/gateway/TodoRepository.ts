import { ITodoRepository } from "../../application/repositories/ITodoRepositoey";
import { DocData } from "../../application/repositories/IDBRepository";
import { IFirestore } from "./IDBStore";
import { ITodoComn, ITodoEntity } from "../../domain";
import { userPathQuery, todoPathQuery } from "../../utils";

export class TodoRepository implements ITodoRepository {
  private readonly db: IFirestore;

  constructor(firestore: IFirestore) {
    this.db = firestore;
  }

  async fetch(id: string): Promise<Array<ITodoEntity> | null> {
    try {
      if (id === null || id === undefined) null;
      const path = todoPathQuery(id);
      const dbData: any = await this.db.getCollection(path);
      const generator: Array<ITodoEntity> = dbData.map((todo: DocData) => ({
        id: todo.data,
        ...todo.data,
      }));

      return generator;
    } catch (error) {
      throw error;
    }
  }

  async create(path: string, todo: ITodoComn): Promise<ITodoEntity> {
    try {
      if (path === undefined || path === null) {
        throw new Error("not found create target todo");
      }
      const docId: any = await this.db.setCollection(path, todo);
      return { id: docId, ...todo };
    } catch (error) {
      throw error;
    }
  }

  // return deleted Todo item id
  async delete(path: string): Promise<void> {
    try {
      if (path === null || path === undefined) {
        throw new Error("not found delete todo");
      }
      this.db.deleteDoc(path);
    } catch (error) {
      throw error;
    }
  }

  async update(path: string, todo: ITodoEntity): Promise<ITodoEntity | null> {
    try {
      if (path === undefined || path === null) {
        throw new Error("not found update target user");
      }
      const docId = todo.id;
      delete todo.id;
      await this.db.updateDoc(path, todo);
      return { id: docId, ...(todo as ITodoComn) };
    } catch (error) {
      throw error;
    }
  }
}
