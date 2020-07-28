import firebase from "firebase";
import * as Firestore from "../../adapter/gateway/IDBStore";
import { DocData } from "../../application/repositories/IDBRepository";
export declare class FireStore implements Firestore.IFirestore {
    readonly db: firebase.firestore.Firestore;
    constructor(app: firebase.app.App);
    private baseCollection;
    private baseDoc;
    /**
     * Function to get the data of collection to the firestore
     *
     * @param path arams firestore path collection id
     * @param option paramas firestore get option
     */
    getCollection(path: string, option: any): Promise<Array<DocData> | null>;
    /**
     * Function to add new data to firestore
     *
     * @param path params firestore path collection id
     * @param query paramas data to be stored in firestore
     * @param option paramas firestore save option
     */
    setCollection(path: string, query: Firestore.SetFql, option: any): Promise<string>;
    /**
     * Function to save the data to the firestore
     *
     * @param path params firestore path collection id or document id
     * @param query paramas data to be stored in firestore
     * @param option paramas firestore save option
     */
    setDoc(path: string, query: Firestore.SetFql, option?: any): Promise<void>;
    /**
     * Function to save the data to the firestore
     *
     * @param path params firestore path collection id or document id
     * @param query paramas data to be stored in firestore
     * @param option paramas firestore save option
     */
    updateDoc(path: string, query: Firestore.SetFql, option?: any): Promise<void>;
    /**
     * Function to get the data to the firestore
     *
     * @param path arams firestore path collection id or document id
     * @param option paramas firestore get option
     */
    getDoc(path: string, option?: any): Promise<DocData | null>;
    deleteDoc(path: string): Promise<void>;
    subscribeDoc(path: string, setState: (state: any) => void, option?: any): Promise<() => void>;
    subscribeCollection(path: string, setState: (state: any) => void, option?: any): Promise<() => void>;
}
