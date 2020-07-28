import firebase from "firebase";
import * as Fireauth from "../../adapter/gateway/IDBAuth";

export class FireAuth implements Fireauth.IFireauth {
  public readonly auth: firebase.auth.Auth;

  constructor(app: firebase.app.App) {
    this.auth = app.auth();
  }

  async signInWithEmail(
    email: string,
    pass: string
  ): Promise<firebase.User | null> {
    try {
      const credential = await this.auth.signInWithEmailAndPassword(
        email,
        pass
      );
      return credential.user;
    } catch (error) {
      throw error;
    }
  }

  async signUpWithEmail(
    email: string,
    pass: string,
    displayName?: string
  ): Promise<firebase.User | null> {
    try {
      const credential = await this.auth.createUserWithEmailAndPassword(
        email,
        pass
      );
      return credential.user;
    } catch (error) {
      throw error;
    }
  }

  async signOut(): Promise<void> {
    try {
      await this.auth.signOut();
    } catch {
      (error: Fireauth.AuthError) => error;
    }
  }

  currentUser(): firebase.User | null {
    return this.auth.currentUser;
  }

  authStateChanged(setState: (state: any) => void): firebase.Unsubscribe {
    return this.auth.onAuthStateChanged((user: firebase.User | null) => {
      if (user !== null) {
        setState(user);
      } else {
        setState(null);
      }
    });
  }

  async updateUser(
    user: firebase.User | null
  ): Promise<void | firebase.auth.AuthError> {
    try {
      return await this.auth.updateCurrentUser(user);
    } catch (error) {
      throw error;
    }
  }

  async sendPassResetEmail(email: string): Promise<void> {
    return this.auth.sendPasswordResetEmail(email);
  }
}
