import { Credential, User } from "../../../domain";
import { IAuthRepository, IUserRepository } from "../../repositories";
import firebase from "firebase";
export declare class AuthInteractor {
    private authRepository;
    private userRepository;
    constructor(AuthRepository: IAuthRepository, UserRepository: IUserRepository);
    private fetchUserMetaData;
    private createUserMetaData;
    signIn(credential: Credential): Promise<User | null>;
    singOut(): Promise<void>;
    signUp(credential: Credential, name: string): Promise<User | null>;
    subscribe(setState: (state: any) => void): firebase.Unsubscribe;
    currentUser(): Promise<User | null>;
}
