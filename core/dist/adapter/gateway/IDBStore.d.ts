import { DocData } from "../../application/repositories/IDBRepository";
export declare type DBError = firebase.firestore.FirestoreError;
export declare type SetFql = {
    [Field: string]: any;
};
export declare abstract class IFirestore {
    abstract getCollection(path: string, option?: any): Promise<Array<DocData> | null>;
    abstract setCollection(path: string, query: SetFql, option?: any): Promise<string>;
    abstract getDoc(path: string, option?: any): Promise<DocData | null>;
    abstract setDoc(path: string, query: SetFql, option?: any): Promise<void>;
    abstract updateDoc(path: string, query: SetFql, option?: any): Promise<void>;
    abstract deleteDoc(path: string): Promise<void>;
    abstract subscribeDoc(path: string, setState: (state: any) => void, option?: any): Promise<() => void | null>;
    abstract subscribeCollection(path: string, setState: (state: any) => void, option?: any): Promise<() => void | null>;
}
