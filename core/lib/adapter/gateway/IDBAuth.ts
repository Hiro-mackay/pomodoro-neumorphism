export type AuthError = firebase.auth.AuthError;
export type AuthUser = firebase.User;

export abstract class IFireauth {
  abstract async signInWithEmail(
    email: string,
    pass: string
  ): Promise<firebase.User | null>;
  abstract async signUpWithEmail(
    email: string,
    pass: string,
    displayName: string | undefined
  ): Promise<firebase.User | null>;
  abstract async signOut(): Promise<void>;
  abstract currentUser(): firebase.User | null;
  abstract authStateChanged(
    setState: (state: any) => void
  ): firebase.Unsubscribe;
  abstract async updateUser(
    user: firebase.User | null
  ): Promise<void | firebase.auth.AuthError>;
  abstract async sendPassResetEmail(email: string): Promise<void>;
}
