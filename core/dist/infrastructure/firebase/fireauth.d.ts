import firebase from "firebase";
import * as Fireauth from "../../adapter/gateway/IDBAuth";
export declare class FireAuth implements Fireauth.IFireauth {
    readonly auth: firebase.auth.Auth;
    constructor(app: firebase.app.App);
    signInWithEmail(email: string, pass: string): Promise<firebase.User | null>;
    signUpWithEmail(email: string, pass: string, displayName?: string): Promise<firebase.User | null>;
    signOut(): Promise<void>;
    currentUser(): firebase.User | null;
    authStateChanged(setState: (state: any) => void): firebase.Unsubscribe;
    updateUser(user: firebase.User | null): Promise<void | firebase.auth.AuthError>;
    sendPassResetEmail(email: string): Promise<void>;
}
