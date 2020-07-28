export interface ITodoComn {
  title: string;
  expectedPomo: number;
  excutedPomo: number;
  status: TodoStutas;
  beginAt: Date;
  endAt: Date | null;
  project: string | null;
}

export interface ITodoEntity extends ITodoComn {
  id: string;
}

export type TodoStutas =
  | "someday"
  | "recently"
  | "tomorrow"
  | "today"
  | "inProgress"
  | "done";

export class Todo {
  private _list: Array<ITodoEntity>; // Todoがnullの場合はインスタンスを作らない

  constructor(todoList: Array<ITodoEntity>) {
    this._list = [...todoList];
  }

  get list(): Array<ITodoEntity> {
    return this._list;
  }

  add(todo: ITodoEntity): void {
    this.updateList([...this._list, todo]);
  }

  update(todo: ITodoEntity): void {
    const updateIndex: number = this._list.findIndex(
      (t: ITodoEntity) => t.id === todo.id
    );

    if (updateIndex === -1) {
      this.add(todo);
    } else {
      this._list[updateIndex] = todo;
    }
  }

  updateList(todoList: Array<ITodoEntity>) {
    this._list = todoList;
  }

  remove(id: string): void {
    this.updateList(this._list.filter((todo: ITodoEntity) => todo.id !== id));
  }

  indexofId(id: string): number {
    return this._list.findIndex((todo: ITodoEntity) => todo.id === id);
  }

  existsId(id: string): boolean {
    return this.indexofId(id) !== -1;
  }
}
