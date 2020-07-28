import { IUserRepository } from "../../repositories";
import { IUser, User } from "../../../domain";
export declare class UpdateUser {
    userRepository: IUserRepository;
    constructor(userRepository: IUserRepository);
    update(user: IUser): Promise<User>;
}
