export class Credential {
  public readonly id: string;
  public readonly pass: string;

  constructor(id: string, pass: string) {
    this.id = id;
    this.pass = pass;
  }
}
