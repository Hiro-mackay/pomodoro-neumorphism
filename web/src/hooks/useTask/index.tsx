import React, { useContext, useState, createContext } from "react";
import FirebaseApp from "../../constants/firebasConfig";
import { TaskRepository, Usecase, FireStore, DBError, Task } from "core";

const FireStoreInfra = new FireStore(FirebaseApp);
const TaskRepo = new TaskRepository(FireStoreInfra);
const AddTask = new Usecase.AddTask(TaskRepo);
const DeleteTask = new Usecase.DeleteTask(TaskRepo);
const UpdateTask = new Usecase.UpdateTask(TaskRepo);

type IProvideTask = {
  task: Task | null;
  loading: boolean;
  error: firebase.firestore.FirestoreError | null;
  addTask: (task: Task) => void;
  deleteTask: (task: Task) => void;
  updateTask: (task: Task) => void;
};

const TaskContext = createContext<null | IProvideTask>(null);

type ProvideProps = {
  children: React.ReactNode;
};

export const ProvideTask: React.FC<ProvideProps> = ({
  children,
}: ProvideProps) => {
  const task = useProvideTask();
  return <TaskContext.Provider value={task}>{children}</TaskContext.Provider>;
};

export const useTask = () => {
  return useContext(TaskContext);
};

export const useProvideTask = () => {
  const [task, setTask] = useState<null | Task>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<DBError | null>(null);

  const addTask = (task: Task) => {
    setLoading(true);
    AddTask.add(task)
      .then(() => {
        setLoading(false);
        setTask(task);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  };

  const deleteTask = (task: Task) => {
    setLoading(true);
    DeleteTask.delete(task)
      .then(() => {
        setLoading(false);
        setTask(null);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  };

  const updateTask = (task: Task) => {
    setLoading(true);
    UpdateTask.update(task)
      .then(() => {
        setLoading(false);
        setTask(task);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  };

  return {
    task,
    loading,
    error,
    addTask,
    deleteTask,
    updateTask,
  };
};
