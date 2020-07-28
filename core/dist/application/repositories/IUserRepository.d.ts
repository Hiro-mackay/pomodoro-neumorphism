import { IUser } from "../../domain";
export declare abstract class IUserRepository {
    abstract fetch(path: string): Promise<IUser | null>;
    abstract create(path: string, user: IUser): Promise<IUser>;
    abstract update(path: string, user: IUser): Promise<IUser>;
}
