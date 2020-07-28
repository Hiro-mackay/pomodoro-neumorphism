import { Credential, User, IAuthUser } from "../../domain";
import firebase from "firebase";
export declare type AuthError = firebase.auth.AuthError;
export declare abstract class IAuthRepository {
    abstract signUp(credencial: Credential, name: string): Promise<IAuthUser | null>;
    abstract signIn(credencial: Credential): Promise<IAuthUser | null>;
    abstract signOut(): Promise<void>;
    abstract updateUser(user: User): Promise<IAuthUser>;
    abstract authStateChanged(setState: (state: any) => void): firebase.Unsubscribe;
    abstract curentUser(): IAuthUser | null;
}
