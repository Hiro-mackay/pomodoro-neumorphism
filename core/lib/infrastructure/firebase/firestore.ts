import firebase from "firebase";
import * as Firestore from "../../adapter/gateway/IDBStore";
import { DocData } from "../../application/repositories/IDBRepository";

const pathSplitStrig = "/";
function pathSplit(DBPathQuery: string): Array<string> {
  return DBPathQuery.split(pathSplitStrig);
}

export class FireStore implements Firestore.IFirestore {
  public readonly db: firebase.firestore.Firestore;

  constructor(app: firebase.app.App) {
    this.db = app.firestore();
  }

  private baseCollection(path: string): firebase.firestore.CollectionReference {
    const [_coll] = pathSplit(path);
    return this.db.collection(_coll);
  }

  private baseDoc(path: string): firebase.firestore.DocumentReference {
    const [_coll, _doc] = pathSplit(path);
    return this.db.collection(_coll).doc(_doc);
  }

  /**
   * Function to get the data of collection to the firestore
   *
   * @param path arams firestore path collection id
   * @param option paramas firestore get option
   */
  async getCollection(
    path: string,
    option: any
  ): Promise<Array<DocData> | null> {
    try {
      const snapshot = await this.baseCollection(path).get();
      return snapshot.empty
        ? null
        : snapshot.docs.map((doc: firebase.firestore.DocumentData) => ({
            id: doc.id,
            data: doc.data(),
          }));
    } catch (error) {
      throw error;
    }
  }

  /**
   * Function to add new data to firestore
   *
   * @param path params firestore path collection id
   * @param query paramas data to be stored in firestore
   * @param option paramas firestore save option
   */
  async setCollection(
    path: string,
    query: Firestore.SetFql,
    option: any
  ): Promise<string> {
    try {
      const ref = await this.baseCollection(path).add(query);
      return ref.id;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Function to save the data to the firestore
   *
   * @param path params firestore path collection id or document id
   * @param query paramas data to be stored in firestore
   * @param option paramas firestore save option
   */
  async setDoc(
    path: string,
    query: Firestore.SetFql,
    option?: any
  ): Promise<void> {
    try {
      return this.baseDoc(path).set(query);
    } catch (error) {
      throw error;
    }
  }

  /**
   * Function to save the data to the firestore
   *
   * @param path params firestore path collection id or document id
   * @param query paramas data to be stored in firestore
   * @param option paramas firestore save option
   */
  async updateDoc(
    path: string,
    query: Firestore.SetFql,
    option?: any
  ): Promise<void> {
    try {
      return this.baseDoc(path).update(query);
    } catch (error) {
      throw error;
    }
  }

  /**
   * Function to get the data to the firestore
   *
   * @param path arams firestore path collection id or document id
   * @param option paramas firestore get option
   */
  async getDoc(path: string, option?: any): Promise<DocData | null> {
    try {
      const snapshot = await this.baseDoc(path).get();
      return snapshot.exists
        ? {
            id: snapshot.id,
            data: snapshot.data(),
          }
        : null;
    } catch (error) {
      throw error;
    }
  }

  async deleteDoc(path: string): Promise<void> {
    try {
      return this.baseDoc(path).delete();
    } catch (error) {
      throw error;
    }
  }

  async subscribeDoc(
    path: string,
    setState: (state: any) => void,
    option?: any
  ): Promise<() => void> {
    return new Promise((resolve, reject) => {
      try {
        const unsubscribe = this.baseDoc(path).onSnapshot((doc) => {
          const data: DocData = {
            id: doc.id,
            data: doc.data(),
          };
          setState(data);
        });
        resolve((): void => {
          unsubscribe();
        });
      } catch (err) {
        reject(err);
      }
    });
  }

  async subscribeCollection(
    path: string,
    setState: (state: any) => void,
    option?: any
  ): Promise<() => void> {
    return new Promise((resolve, reject) => {
      try {
        const unsubscribe = this.baseCollection(path).onSnapshot(
          (snapshot: any) => {
            const data: Array<DocData> = snapshot.map(
              (doc: firebase.firestore.DocumentData) => ({
                id: doc.id,
                data: doc.data(),
              })
            );

            setState(data);
          }
        );
        resolve((): void => {
          unsubscribe();
        });
      } catch (error) {
        reject(error);
      }
    });
  }
}
