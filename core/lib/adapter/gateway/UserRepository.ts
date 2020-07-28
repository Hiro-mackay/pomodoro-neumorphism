import { IUserRepository, DocData } from "../../application/repositories";
import { IFirestore } from "./IDBStore";
import { IUser } from "../../domain";

export class UserRepository implements IUserRepository {
  private readonly db: IFirestore;

  constructor(firestore: IFirestore) {
    this.db = firestore;
  }

  private convertModel(doc: DocData): any {
    return {
      id: doc.id,
      ...doc.data,
    };
  }

  private existsUser(user: DocData | null): any | null {
    return user !== null ? this.convertModel(user) : null;
  }

  async fetch(path: string): Promise<IUser | null> {
    try {
      if (path === undefined || path === null) return null;
      const docDataUser = await this.db.getDoc(path);
      return this.existsUser(docDataUser);
    } catch (error) {
      throw error;
    }
  }
  async create(path: string, user: IUser): Promise<IUser> {
    try {
      if (path === undefined || path === null) {
        throw new Error("not found create target user");
      }
      await this.db.setDoc(path, { ...user });
      return user;
    } catch (error) {
      throw error;
    }
  }
  async update(path: string, user: IUser): Promise<IUser> {
    try {
      if (path === undefined || path === null) {
        throw new Error("not found update target user");
      }
      await this.db.updateDoc(path, { ...user });
      return user;
    } catch (error) {
      throw error;
    }
  }
}
