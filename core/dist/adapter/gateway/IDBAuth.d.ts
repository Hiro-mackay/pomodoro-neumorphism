export declare type AuthError = firebase.auth.AuthError;
export declare type AuthUser = firebase.User;
export declare abstract class IFireauth {
    abstract signInWithEmail(email: string, pass: string): Promise<firebase.User | null>;
    abstract signUpWithEmail(email: string, pass: string, displayName: string | undefined): Promise<firebase.User | null>;
    abstract signOut(): Promise<void>;
    abstract currentUser(): firebase.User | null;
    abstract authStateChanged(setState: (state: any) => void): firebase.Unsubscribe;
    abstract updateUser(user: firebase.User | null): Promise<void | firebase.auth.AuthError>;
    abstract sendPassResetEmail(email: string): Promise<void>;
}
