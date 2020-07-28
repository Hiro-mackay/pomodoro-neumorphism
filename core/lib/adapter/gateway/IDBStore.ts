import { DocData } from "../../application/repositories/IDBRepository";

export type DBError = firebase.firestore.FirestoreError;

export declare type SetFql = {
  [Field: string]: any;
};

export abstract class IFirestore {
  abstract async getCollection(
    path: string,
    option?: any
  ): Promise<Array<DocData> | null>;

  // return document id or error
  abstract async setCollection(
    path: string,
    query: SetFql,
    option?: any
  ): Promise<string>;

  
  abstract async getDoc(path: string, option?: any): Promise<DocData | null>;

  // return document id or error
  abstract async setDoc(
    path: string,
    query: SetFql,
    option?: any
  ): Promise<void>;

  // return document id or error
  abstract async updateDoc(
    path: string,
    query: SetFql,
    option?: any
  ): Promise<void>;

  abstract async deleteDoc(path: string): Promise<void>;

  abstract async subscribeDoc(
    path: string,
    setState: (state: any) => void,
    option?: any
  ): Promise<() => void | null>;

  abstract async subscribeCollection(
    path: string,
    setState: (state: any) => void,
    option?: any
  ): Promise<() => void | null>;
}
