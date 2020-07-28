import { IUserRepository } from "../../repositories";
import { User, IAuthUser } from "../../../domain";
import { userPathQuery } from "../../../utils/constants/dbpath";

export class CreateUser {
  userRepository: IUserRepository;
  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async create(user: IAuthUser): Promise<User> {
    try {
      const _user = new User(user);
      await this.userRepository.create(userPathQuery(user.id), _user.toObj());
      return _user;
    } catch (error) {
      throw error;
    }
  }
}



