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
export declare class User {
    readonly id: string;
    readonly name: string | null;
    readonly email: string | null;
    readonly groupBy: string | null;
    readonly task: Task | null;
    readonly timer: Timer | null;
    constructor(user: IAuthUser, groupBy?: string | null, task?: ITaskEntity | null, timer?: ITimerEntity | null);
    toObj(): IUser;
}
