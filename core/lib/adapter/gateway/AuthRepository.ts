import { IAuthRepository } from "../../application/repositories/IAuthRepository";
import { IFireauth, AuthUser } from "./IDBAuth";
import { Credential, IAuthUser } from "../../domain";

export class AuthRepository implements IAuthRepository {
  private readonly auth: IFireauth;
  constructor(auth: IFireauth) {
    this.auth = auth;
  }

  private convertModel(user: AuthUser): IAuthUser {
    return {
      id: user.uid,
      name: user.displayName,
      email: user.email,
    };
  }

  private existsUser(user: AuthUser | null): IAuthUser | null {
    return user !== null ? this.convertModel(user) : null;
  }

  async signIn(credencial: Credential): Promise<IAuthUser | null> {
    try {
      const user: any = await this.auth.signInWithEmail(
        credencial.id,
        credencial.pass
      );

      return this.existsUser(user);
    } catch (error) {
      throw error;
    }
  }

  async signUp(
    credencial: Credential,
    name: string
  ): Promise<IAuthUser | null> {
    try {
      const user: any = await this.auth.signUpWithEmail(
        credencial.id,
        credencial.pass,
        name
      );
      return this.existsUser(user ? { ...user, displayName: name } : user);
    } catch (error) {
      throw error;
    }
  }

  async signOut(): Promise<void> {
    return this.auth.signOut();
  }

  async updateUser(user: IAuthUser): Promise<IAuthUser> {
    try {
      const currentUser = this.authCurrentUser();
      if (currentUser !== null) {
        await this.auth.updateUser({
          ...currentUser,
          displayName: user.name,
          email: user.email,
        });
      }
      return user;
    } catch (error) {
      throw error;
    }
  }

  authStateChanged(setState: (state: any) => void): firebase.Unsubscribe {
    return this.auth.authStateChanged((s: firebase.User | null) => {
      const user = this.existsUser(s);
      setState(user);
    });
  }

  authCurrentUser(): firebase.User | null {
    return this.auth.currentUser();
  }

  curentUser(): IAuthUser | null {
    const authUser = this.authCurrentUser();
    return this.existsUser(authUser);
  }
}
