import { ITodoEntity, TodoStutas } from "./Todo";
export interface ITaskEntity extends ITodoEntity {
    ownerId: string;
}
export declare class Task {
    id: string;
    title: string;
    expectedPomo: number;
    excutedPomo: number;
    status: TodoStutas;
    beginAt: Date;
    endAt: Date | null;
    project: string | null;
    ownerId: string;
    constructor(todo: ITaskEntity);
    update(todo: ITaskEntity): void;
    toObj(): ITaskEntity;
}
