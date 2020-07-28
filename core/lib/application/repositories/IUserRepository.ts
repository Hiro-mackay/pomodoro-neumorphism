import { IUser } from "../../domain";

export abstract class IUserRepository {
  abstract async fetch(path: string): Promise<IUser | null>;
  abstract async create(path: string, user: IUser): Promise<IUser>;
  abstract async update(path: string, user: IUser): Promise<IUser>;
}
