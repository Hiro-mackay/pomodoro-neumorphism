import firebase from "firebase";

export declare type DBError = firebase.firestore.FirestoreError;

export declare type DocData = {
  data:
    | {
        [field: string]: any;
      }
    | null
    | undefined;
  id: string | null;
};

export declare type CollectionData = DocData[];
