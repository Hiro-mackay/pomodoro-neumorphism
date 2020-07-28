import { IUserRepository } from "../../application/repositories";
import { IFirestore } from "./IDBStore";
import { IUser } from "../../domain";
export declare class UserRepository implements IUserRepository {
    private readonly db;
    constructor(firestore: IFirestore);
    private convertModel;
    private existsUser;
    fetch(path: string): Promise<IUser | null>;
    create(path: string, user: IUser): Promise<IUser>;
    update(path: string, user: IUser): Promise<IUser>;
}
