export class LoginForm{

  private _email: string;
  private _password: string

  constructor(
    email: string = "",
    password: string = ""
    ) {
    this._email = email
    this._password = password
  }

  public getEmail(): string {
    return this._email;
  }

  public getPassword(): string {
    return this._password;
  }

  public setEmail(value: string): void{
    this._email = value
  }

  public setPassword(value: string): void {
    this._password = value
  }

}
