import {
  Credential,
  IAuthUser,
  User,
  ITaskEntity,
  ITimerEntity,
} from "../../../domain";
import { IAuthRepository, IUserRepository } from "../../repositories";
import { userPathQuery } from "../../../utils";
import firebase from "firebase";

export class AuthInteractor {
  private authRepository: IAuthRepository;
  private userRepository: IUserRepository;

  constructor(
    AuthRepository: IAuthRepository,
    UserRepository: IUserRepository
  ) {
    this.authRepository = AuthRepository;
    this.userRepository = UserRepository;
  }

  private async fetchUserMetaData(authUser: IAuthUser): Promise<User | null> {
    try {
      if (!authUser || !authUser.id) return null;
      const _user = await this.userRepository.fetch(userPathQuery(authUser.id));

      if (_user?.timer) {
        if ("seconds" in _user.timer.startAt) {
          const timestamp = _user.timer.startAt as firebase.firestore.Timestamp;

          _user.timer.startAt = timestamp.toDate();
        }
      }

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

  private async createUserMetaData(authUser: IAuthUser): Promise<User | null> {
    try {
      const task: ITaskEntity = {
        id: "",
        ownerId: authUser.id,
        title: "",
        expectedPomo: 0,
        excutedPomo: 0,
        status: "someday",
        beginAt: new Date(),
        endAt: null,
        project: null,
      };

      const timer: ITimerEntity = {
        ownerId: authUser.id,
        startAt: new Date(),
        isStop: true,
        status: "pending",
        timerType: "pomodoro",
        totalMilliSeconds: 0,
        isLoop: false,
      };

      const _user = new User(authUser, null, task, timer);
      await this.userRepository.create(userPathQuery(_user.id), _user.toObj());
      return _user;
    } catch (error) {
      throw error;
    }
  }

  async signIn(credential: Credential): Promise<User | null> {
    try {
      const authUser = await this.authRepository.signIn(credential);
      if (authUser !== null) {
        return this.fetchUserMetaData(authUser);
      }

      return null;
    } catch (error) {
      throw error;
    }
  }

  async singOut(): Promise<void> {
    return this.authRepository.signOut();
  }

  async signUp(credential: Credential, name: string): Promise<User | null> {
    try {
      const authUser = await this.authRepository.signUp(credential, name);
      if (authUser !== null) {
        return this.createUserMetaData(authUser);
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  // setState is react state update function
  subscribe(setState: (state: any) => void): firebase.Unsubscribe {
    const _setUser = async (user: any) => {
      const _user = await this.fetchUserMetaData(user);
      setState(_user);
    };
    return this.authRepository.authStateChanged(_setUser);
  }

  async currentUser(): Promise<User | null> {
    try {
      const authUser = this.authRepository.curentUser();
      if (authUser !== null) {
        return this.fetchUserMetaData(authUser);
      }

      return null;
    } catch (error) {
      throw error;
    }
  }
}
