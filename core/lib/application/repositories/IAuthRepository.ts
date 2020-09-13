import { Credential, User, IAuthUser } from "../../domain";
import firebase from "firebase";

export type AuthError = firebase.auth.AuthError;

export abstract class IAuthRepository {
  abstract async signUp(
    credencial: Credential,
    name: string
  ): Promise<IAuthUser | null>;
  abstract async signIn(credencial: Credential): Promise<IAuthUser | null>;
  abstract async signOut(): Promise<void>;
  abstract async updateUser(user: User): Promise<IAuthUser>;
  abstract authStateChanged(
    setState: (state: any) => void
  ): firebase.Unsubscribe;
  abstract curentUser(): IAuthUser | null;
}

abstract class Repository {
  abstract getData(): void;
}

type DataAccessInterface = Repository;
class DataAccess {
  getData = () => {};
}

// Domain.ts
const infra: DataAccessInterface = new DataAccess();
infra.getData();
// DataAccessの内部実装は知らんが、getDataがあることは、
// 抽象クラスDataAccessInterfaceで定義されている
