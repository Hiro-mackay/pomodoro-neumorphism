import React, { useContext, useState, createContext } from "react";
import FirebaseApp from "../../constants/firebasConfig";
import {
  Usecase,
  FireStore,
  DBError,
  TodoRepository,
  Todo,
  TodoStutas,
  ITodoEntity,
} from "core";

const FireStoreInfra = new FireStore(FirebaseApp);
const TodoRepo = new TodoRepository(FireStoreInfra);
const UsecaseTodo = new Usecase.TodoInteractor(TodoRepo);

type IProvideTodo = {
  todo: Todo | null;
  loading: boolean;
  error: firebase.firestore.FirestoreError | null;
  fetchTodo: (id: string) => void;
  addTodo: (
    ownerId: string,
    task: string,
    pom: number | undefined,
    project: string | null | undefined,
    status: TodoStutas
  ) => void;
  deleteTodo: (todoId: string, ownerId: string) => void;
  updateTodo: (todo: ITodoEntity) => void;
};

const TodoContext = createContext<null | IProvideTodo>(null);

type ProvideProps = {
  children: React.ReactNode;
};

export const ProvideTodo: React.FC<ProvideProps> = ({
  children,
}: ProvideProps) => {
  const todo = useProvideTodo();
  return <TodoContext.Provider value={todo}>{children}</TodoContext.Provider>;
};
export const useTodo = () => {
  return useContext(TodoContext);
};

export const useProvideTodo = () => {
  const [todo, setTodo] = useState<null | Todo>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<DBError | null>(null);

  const fetchTodo = (id: string) => {
    setLoading(true);
    UsecaseTodo.fetch(id)
      .then((todo: null | Todo) => {
        setLoading(false);
        setTodo(todo);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  };

  const addTodo = (
    ownerId: string,
    task: string,
    pom: number | undefined,
    project: string | null | undefined,
    status: TodoStutas
  ) => {
    setLoading(true);
    UsecaseTodo.add(ownerId, task, pom, project, status)
      .then((todo: Todo | null) => {
        setLoading(false);
        setTodo(todo);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  };

  const deleteTodo = (todoId: string, ownerId: string) => {
    UsecaseTodo.delete(todoId, ownerId)
      .then((todo: Todo | null) => {
        setLoading(false);
        setTodo(todo);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  };

  const updateTodo = (todo: ITodoEntity) => {
    UsecaseTodo.update(todo)
      .then((todo: Todo | null) => {
        setLoading(false);
        setTodo(todo);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  };

  return {
    todo,
    loading,
    error,
    fetchTodo,
    addTodo,
    deleteTodo,
    updateTodo,
  };
};
