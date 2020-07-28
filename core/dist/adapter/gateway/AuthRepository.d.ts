import { IAuthRepository } from "../../application/repositories/IAuthRepository";
import { IFireauth } from "./IDBAuth";
import { Credential, IAuthUser } from "../../domain";
export declare class AuthRepository implements IAuthRepository {
    private readonly auth;
    constructor(auth: IFireauth);
    private convertModel;
    private existsUser;
    signIn(credencial: Credential): Promise<IAuthUser | null>;
    signUp(credencial: Credential, name: string): Promise<IAuthUser | null>;
    signOut(): Promise<void>;
    updateUser(user: IAuthUser): Promise<IAuthUser>;
    authStateChanged(setState: (state: any) => void): firebase.Unsubscribe;
    authCurrentUser(): firebase.User | null;
    curentUser(): IAuthUser | null;
}
