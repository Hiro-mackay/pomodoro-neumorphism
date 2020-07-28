import { ITimerEntity, Timer } from "./Timer";
import { Task, ITaskEntity } from "./Task";

export interface IAuthUser {
  id: string;
  name: string | null;
  email: string | null;
}

export interface IUser extends IAuthUser {
  groupBy: string | null;
  task: ITaskEntity | null;
  timer: ITimerEntity | null;
}

export class User {
  public readonly id: string;
  public readonly name: string | null;
  public readonly email: string | null;
  public readonly groupBy: string | null;
  public readonly task: Task | null;
  public readonly timer: Timer | null;

  constructor(
    user: IAuthUser,
    groupBy?: string | null,
    task?: ITaskEntity | null,
    timer?: ITimerEntity | null
  ) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.groupBy = groupBy ? groupBy : null;
    this.timer = timer ? new Timer(timer) : null;
    this.task = task ? new Task(task) : null;
  }

  toObj(): IUser {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      groupBy: this.groupBy,
      task: this.task ? this.task.toObj() : null,
      timer: this.timer ? this.timer.toObj() : null,
    };
  }
}
