interface IMemberUser {
  id: string;
  name: string;
}

export interface IGroup {
  id: string;
  member: Array<IMemberUser>;
}

export class Group {
  public readonly id: string;
  private _member: Array<IMemberUser>;
  constructor(group: IGroup) {
    this.id = group.id;
    this._member = [...group.member];
  }

  get member(): Array<IMemberUser> {
    return this._member;
  }

  addMember(user: IMemberUser): void {
    this._member = [...this._member, user];
  }

  removeMember(id: string): void {
    this._member = this._member.filter((user: IMemberUser) => user.id !== id);
  }

  toObj(): IGroup {
    return {
      id: this.id,
      member: this._member,
    };
  }
}
