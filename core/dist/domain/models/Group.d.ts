interface IMemberUser {
    id: string;
    name: string;
}
export interface IGroup {
    id: string;
    member: Array<IMemberUser>;
}
export declare class Group {
    readonly id: string;
    private _member;
    constructor(group: IGroup);
    get member(): Array<IMemberUser>;
    addMember(user: IMemberUser): void;
    removeMember(id: string): void;
    toObj(): IGroup;
}
export {};
