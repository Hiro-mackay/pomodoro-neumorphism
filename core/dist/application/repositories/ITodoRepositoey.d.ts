import { ITodoEntity, ITodoComn } from "../../domain";
export declare abstract class ITodoRepository {
    abstract fetch(path: string): Promise<Array<ITodoEntity> | null>;
    abstract create(path: string, todo: ITodoComn): Promise<ITodoEntity>;
    abstract delete(id: string): Promise<void>;
    abstract update(path: string, todo: ITodoEntity): Promise<ITodoEntity | null>;
}
