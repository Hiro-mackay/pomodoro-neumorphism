import { Todo, ITodoEntity, TodoStutas } from "../../../domain";
import { ITodoRepository } from "../../repositories";
export declare class TodoInteractor {
    private todoRepository;
    private _todo;
    constructor(TimerRepository: ITodoRepository);
    get todo(): Todo | null;
    private existsTodo;
    private generator;
    fetch(id: string): Promise<Todo | null>;
    add(ownerId: string, taskTitle: string, pom: number | undefined, project: string | null | undefined, status: TodoStutas): Promise<Todo | null>;
    delete(todoId: string, ownerId: string): Promise<Todo | null>;
    update(todo: ITodoEntity): Promise<Todo | null>;
}
