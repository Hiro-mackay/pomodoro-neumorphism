import { IUserRepository } from "../../repositories";
import { User, IAuthUser } from "../../../domain";
export declare class FetchUser {
    userRepository: IUserRepository;
    constructor(userRepository: IUserRepository);
    fetch(user: IAuthUser): Promise<User | null>;
}
