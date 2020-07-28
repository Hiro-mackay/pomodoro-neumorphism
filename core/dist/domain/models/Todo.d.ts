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
export declare type TodoStutas = "someday" | "recently" | "tomorrow" | "today" | "inProgress" | "done";
export declare class Todo {
    private _list;
    constructor(todoList: Array<ITodoEntity>);
    get list(): Array<ITodoEntity>;
    add(todo: ITodoEntity): void;
    update(todo: ITodoEntity): void;
    updateList(todoList: Array<ITodoEntity>): void;
    remove(id: string): void;
    indexofId(id: string): number;
    existsId(id: string): boolean;
}
