import {
  Todo,
  ITodoEntity,
  TodoStutas,
  ITodoComn,
} from "../../../domain";
import { ITodoRepository } from "../../repositories";
import { userPathQuery, todoPathQuery } from "../../../utils/constants/dbpath";

export class TodoInteractor {
  private todoRepository: ITodoRepository;
  private _todo: Todo | null;

  constructor(TimerRepository: ITodoRepository) {
    this.todoRepository = TimerRepository;
    this._todo = null;
  }

  get todo(): Todo | null {
    return this._todo;
  }

  private existsTodo(): boolean {
    return this._todo !== null;
  }

  private generator(todo: ITodoEntity) {
    if (this.existsTodo()) {
      this._todo?.add({ ...todo });
    } else {
      this._todo = new Todo([todo]);
    }
  }

  async fetch(id: string): Promise<Todo | null> {
    try {
      const todoList: any = await this.todoRepository.fetch(id);
      if (todoList === null) {
        return null;
      } else {
        this._todo = new Todo(todoList);
        return this.todo;
      }
    } catch (error) {
      throw error;
    }
  }

  async add(
    ownerId: string,
    taskTitle: string,
    pom: number = 0,
    project: string | null = null,
    status: TodoStutas
  ): Promise<Todo | null> {
    try {
      const _todo: ITodoComn = {
        title: taskTitle,
        expectedPomo: pom,
        excutedPomo: 0,
        status: status,
        beginAt: new Date(),
        endAt: null,
        project: project,
      };
      const createdTodo = await this.todoRepository.create(
        userPathQuery(ownerId),
        _todo
      );

      this.generator(createdTodo);

      return this.todo;
    } catch (error) {
      throw error;
    }
  }

  async delete(todoId: string, ownerId: string): Promise<Todo | null> {
    try {
      const deleteTodoPath = todoPathQuery(todoId);

      if (this.existsTodo() && this._todo?.existsId(todoId)) {
        await this.todoRepository.delete(
          `${userPathQuery(ownerId)}/${deleteTodoPath}`
        );
        this._todo?.remove(todoId);
      }
      return this.todo;
    } catch (error) {
      throw error;
    }
  }

  async update(todo: ITodoEntity): Promise<Todo | null> {
    try {
      const updateTodoId = todo.id;
      const updateTodoPath = todoPathQuery(updateTodoId);
      if (this.existsTodo() && this._todo?.existsId(updateTodoId)) {
        const updatedTodo: any = await this.todoRepository.update(
          updateTodoPath,
          todo
        );
        this._todo?.update(updatedTodo);
      }
      return this.todo;
    } catch (error) {
      throw error;
    }
  }
}
