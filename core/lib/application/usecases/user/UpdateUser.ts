import { IUserRepository } from "../../repositories";
import { IUser, User } from "../../../domain";
import { userPathQuery } from "../../../utils/constants/dbpath";

export class UpdateUser {
  userRepository: IUserRepository;
  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async update(user: IUser): Promise<User> {
    try {
      const _user = new User(
        {
          id: user.id,
          name: user.name,
          email: user.email,
        },
        user.groupBy,
        user.task,
        user.timer
      );
      await this.userRepository.update(userPathQuery(user.id), _user.toObj());
      return _user;
    } catch (error) {
      throw error;
    }
  }
}



