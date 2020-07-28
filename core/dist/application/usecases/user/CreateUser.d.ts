import { IUserRepository } from "../../repositories";
import { User, IAuthUser } from "../../../domain";
export declare class CreateUser {
    userRepository: IUserRepository;
    constructor(userRepository: IUserRepository);
    create(user: IAuthUser): Promise<User>;
}
