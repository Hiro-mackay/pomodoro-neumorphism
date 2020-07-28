import { ITodoRepository } from "../../application/repositories/ITodoRepositoey";
import { IFirestore } from "./IDBStore";
import { ITodoComn, ITodoEntity } from "../../domain";
export declare class TodoRepository implements ITodoRepository {
    private readonly db;
    constructor(firestore: IFirestore);
    fetch(id: string): Promise<Array<ITodoEntity> | null>;
    create(path: string, todo: ITodoComn): Promise<ITodoEntity>;
    delete(path: string): Promise<void>;
    update(path: string, todo: ITodoEntity): Promise<ITodoEntity | null>;
}
