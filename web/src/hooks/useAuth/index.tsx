import React, { useState, useEffect } from "react";
import FirebaseApp from "../../constants/firebasConfig";
import {
  AuthRepository,
  FireAuth,
  Usecase,
  Credential,
  AuthError,
  FireStore,
  UserRepository,
  User,
} from "core";
import { createCtx } from "../utils";

const FireStoreInfra = new FireStore(FirebaseApp);
const UserRepo = new UserRepository(FireStoreInfra);

const FireAuthInfra = new FireAuth(FirebaseApp);
const FireAuthRepository = new AuthRepository(FireAuthInfra);
const AuthUsecase = new Usecase.AuthInteractor(FireAuthRepository, UserRepo);

export type IProvideAuth = {
  currentUser: User | null;
  loading: boolean;
  onLoad: boolean;
  error: firebase.auth.AuthError | null;
  signin: (email: string, pass: string) => void;
  signup: (email: string, pass: string, name: string) => void;
  signout: () => void;
  clearErrorMessage: () => void;
};

type ProvideProps = {
  children: React.ReactNode;
};

const [_useAuth, AuthProvider] = createCtx<IProvideAuth>();

export const useAuth = _useAuth;

export const ProvideAuth: React.FC<ProvideProps> = ({
  children,
}: ProvideProps) => {
  const auth = useProvideAuth();
  return <AuthProvider value={auth}>{children}</AuthProvider>;
};

export const useProvideAuth = (): IProvideAuth => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [onLoad, setOnLoad] = useState<boolean>(false);
  const [error, setError] = useState<AuthError | null>(null);

  const startLoding = () => {
    setLoading(true);
    clearErrorMessage();
  };

  const clearErrorMessage = () => {
    setError(null);
  };

  const signin = (email: string, pass: string) => {
    startLoding();
    const credential = new Credential(email, pass);
    AuthUsecase.signIn(credential)
      .then((user: User | null) => {
        setCurrentUser(user);
        setLoading(false);
        return user;
      })
      .catch((err: AuthError) => {
        setLoading(false);
        setError(err);
      });
  };

  const signup = (email: string, pass: string, name: string) => {
    startLoding();
    const credential = new Credential(email, pass);
    AuthUsecase.signUp(credential, name)
      .then((user: User | null) => {
        setCurrentUser(user);
        setLoading(false);
        return user;
      })
      .catch((err: AuthError) => {
        setLoading(false);
        setError(err);
      });
  };

  const signout = () => {
    startLoding();
    AuthUsecase.singOut()
      .then(() => {
        setLoading(false);
        setCurrentUser(null);
      })
      .catch((err) => {
        setError(err);
      });
  };



  useEffect(() => {
    const subsc = AuthUsecase.subscribe((state: User | null) => {
      if (currentUser) return;
      setCurrentUser(state);
      setOnLoad(true);
    });

    return () => {
      subsc();
    };
  }, [currentUser]);

  return {
    currentUser,
    loading,
    onLoad,
    error,
    signin,
    signup,
    signout,
    clearErrorMessage,
  };
};
