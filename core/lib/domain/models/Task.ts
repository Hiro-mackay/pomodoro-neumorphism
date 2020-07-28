import { ITodoEntity, TodoStutas } from "./Todo";

export interface ITaskEntity extends ITodoEntity {
  ownerId: string;
}

export class Task {
  id: string;
  title: string;
  expectedPomo: number;
  excutedPomo: number;
  status: TodoStutas;
  beginAt: Date;
  endAt: Date | null;
  project: string | null;
  ownerId: string;

  constructor(todo: ITaskEntity) {
    this.id = todo.id;
    this.title = todo.title;
    this.expectedPomo = todo.expectedPomo;
    this.excutedPomo = todo.excutedPomo;
    this.status = todo.status;
    this.beginAt = todo.beginAt;
    this.endAt = todo.endAt;
    this.project = todo.project;
    this.ownerId = todo.ownerId;
  }

  update(todo: ITaskEntity) {
    if (todo.id === this.id) {
      this.id = todo.id;
      this.title = todo.title;
      this.expectedPomo = todo.expectedPomo;
      this.excutedPomo = todo.excutedPomo;
      this.status = todo.status;
      this.beginAt = todo.beginAt;
      this.endAt = todo.endAt;
      this.project = todo.project;
    }
  }

  toObj(): ITaskEntity {
    return {
      id: this.id,
      title: this.title,
      expectedPomo: this.expectedPomo,
      excutedPomo: this.excutedPomo,
      status: this.status,
      beginAt: this.beginAt,
      endAt: this.endAt,
      project: this.project,
      ownerId: this.ownerId,
    };
  }
}
