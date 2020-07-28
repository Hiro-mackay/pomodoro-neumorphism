import { IUserRepository } from "../../repositories";
import { IUser, User, IAuthUser } from "../../../domain";
import { userPathQuery } from "../../../utils/constants/dbpath";

export class FetchUser {
  userRepository: IUserRepository;
  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async fetch(user: IAuthUser): Promise<User | null> {
    try {
      const _user = await this.userRepository.fetch(userPathQuery(user.id));
      return _user !== null
        ? new User(
            {
              id: _user.id,
              name: _user.name,
              email: _user.email,
            },
            _user.groupBy,
            _user.task,
            _user.timer
          )
        : null;
    } catch (error) {
      throw error;
    }
  }
}


