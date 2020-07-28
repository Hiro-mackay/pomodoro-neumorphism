import React, { useState } from "react";
import FirebaseApp from "../../constants/firebasConfig";
import { Usecase, FireStore, DBError, TimerRepository, Timer } from "core";
import { createCtx } from "../utils";

export const POMODORO_TIMER_STANDARD_MILLISECONDS = 25 * 60 * 1000;
export const BREAK_TIMER_STANDARD_MILLISECONDS = 5 * 60 * 1000;

const FireStoreInfra = new FireStore(FirebaseApp);
const TimerRepo = new TimerRepository(FireStoreInfra);
const TimerUsecase = new Usecase.TimerInteractor(TimerRepo);

type IProvideTimer = {
  timer: Timer | null;
  loading: boolean;
  error: firebase.firestore.FirestoreError | null;
  startTimer: (timer: Timer) => void;
  stopTimer: (timer: Timer) => void;
  resetTimer: (timer: Timer) => void;
  loopToogle: (timer: Timer) => void;
  changeTimerType: (timer: Timer) => void;
};

type ProvideProps = {
  children: React.ReactNode;
};

const [_useTimer, TimerProvider] = createCtx<IProvideTimer>();

export const useTimer = _useTimer;

export const ProvideTimer: React.FC<ProvideProps> = ({
  children,
}: ProvideProps) => {
  const timer = useProvideTimer();
  return <TimerProvider value={timer}>{children}</TimerProvider>;
};

export const useProvideTimer = () => {
  const [timer, setTimer] = useState<null | Timer>(null);



  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<DBError | null>(null);

  const startTimer = (timer: Timer) => {
    setLoading(true);

    TimerUsecase.start(timer)
      .then((_t) => {
        setLoading(false);
        setTimer(_t);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  };

  const stopTimer = (timer: Timer) => {
    setLoading(true);
    TimerUsecase.stop(timer)
      .then((_t) => {
        setLoading(false);
        setTimer(_t);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  };

  const resetTimer = (timer: Timer) => {
    setLoading(true);
    TimerUsecase.reset(timer)
      .then((_t) => {
        setLoading(false);
        setTimer(_t);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  };

  const loopToogle = (timer: Timer) => {
    setLoading(true);
    TimerUsecase.LoopToggle(timer)
      .then((_t) => {
        setLoading(false);
        setTimer(_t);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  };

  const changeTimerType = (timer: Timer) => {
    setLoading(true);
    TimerUsecase.changeTimerType(timer)
      .then((_t) => {
        setLoading(false);
        setTimer(_t);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  };

  return {
    timer,
    loading,
    error,
    startTimer,
    stopTimer,
    resetTimer,
    loopToogle,
    changeTimerType,
  };
};
