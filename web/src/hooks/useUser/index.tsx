import React, { useContext, useState, createContext } from "react";
import FirebaseApp from "../../constants/firebasConfig";
import {
  Usecase,
  FireStore,
  DBError,
  UserRepository,
  User,
  IAuthUser,
  IUser,
} from "core";

const FireStoreInfra = new FireStore(FirebaseApp);
const UserRepo = new UserRepository(FireStoreInfra);
const CreateUser = new Usecase.CreateUser(UserRepo);
const FetchUser = new Usecase.FetchUser(UserRepo);
const UpdateUser = new Usecase.UpdateUser(UserRepo);

type IProvideUser = {
  currentUser: User | null;
  loading: boolean;
  error: DBError | null;
  createUser: (authUser: IAuthUser) => void;
  fetchUser: (authUser: IAuthUser) => void;
  updateUser: (_user: IUser) => void;
  clearUser: () => void;
};

const UserContext = createContext<null | IProvideUser>(null);

type ProvideProps = {
  children: React.ReactNode;
};

export const ProvideUser: React.FC<ProvideProps> = ({
  children,
}: ProvideProps) => {
  const user = useProvideUser();
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  return useContext(UserContext);
};

export const useProvideUser = () => {
  const [currentUser, setCurrentUser] = useState<null | User>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<DBError | null>(null);

  const createUser = (authUser: IAuthUser) => {
    setLoading(true);
    CreateUser.create(authUser)
      .then((user: User) => {
        setLoading(false);
        setCurrentUser(user);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  };

  const fetchUser = (authUser: IAuthUser) => {
    setLoading(true);
    FetchUser.fetch(authUser)
      .then((user: User | null) => {
        setLoading(false);
        setCurrentUser(user);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  };

  const updateUser = (_user: IUser) => {
    setLoading(true);
    UpdateUser.update(_user)
      .then((user: User) => {
        setLoading(false);
        setCurrentUser(user);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  };

  const clearUser = () => {
    setCurrentUser(null);
  };

  return {
    currentUser,
    loading,
    error,
    createUser,
    fetchUser,
    updateUser,
    clearUser,
  };
};
