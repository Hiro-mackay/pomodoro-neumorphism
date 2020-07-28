import { ITodoEntity, ITodoComn } from "../../domain";

export abstract class ITodoRepository {
  abstract async fetch(path: string): Promise<Array<ITodoEntity> | null>;
  abstract async create(path: string, todo: ITodoComn): Promise<ITodoEntity>;
  abstract async delete(id: string): Promise<void>;
  abstract async update(
    path: string,
    todo: ITodoEntity
  ): Promise<ITodoEntity | null>;
}
