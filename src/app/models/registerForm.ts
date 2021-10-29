export class RegisterForm{

    private _name: string
    private _lastName: string
    private _phone: string
    private _email: string
    private _reEmail: string
    private _address: string
    private _city: string
    private _state: string
    private _password: string
    private _rePassword: string
    private _conditions: boolean

    constructor(
      name: string = "",
      lastName: string = "",
      phone: string = "",
      email: string = "",
      reEmail: string = "",
      address: string = "",
      city: string = "",
      state: string = "",
      password: string = "",
      rePassword: string = "",
      conditions: boolean = false
      ) {
      this._name = name
      this._lastName = lastName
      this._phone = phone
      this._email = email
      this._reEmail = email
      this._address = address
      this._city = city
      this._state = state
      this._password = password
      this._rePassword = rePassword
      this._conditions = conditions
    }

    public get_name(): string {
        return this._name;
    }

    public set_name(value: string): void {
        this._name = value;
    }

    public get_lastName(): string {
        return this._lastName;
    }

    public set_lastName(value: string): void {
        this._lastName = value;
    }

    public get_phone(): string {
        return this._phone;
    }

    public set_phone(value: string): void {
        this._phone = value;
    }

    public get_email(): string {
        return this._email;
    }

    public set_email(value: string): void {
        this._email = value;
    }

    public get_reEmail(): string {
      return this._reEmail;
  }

  public set_reEmail(value: string): void {
      this._reEmail = value;
  }

    public get_address(): string {
        return this._address;
    }

    public set_address(value: string): void {
        this._address = value;
    }

    public get_city(): string {
        return this._city;
    }

    public set_city(value: string): void {
        this._city = value;
    }

    public get_state(): string {
        return this._state;
    }

    public set_state(value: string): void {
        this._state = value;
    }

    public get_password(): string {
        return this._password;
    }

    public set_password(value: string): void {
        this._password = value;
    }

    public get_rePassword(): string {
        return this._rePassword;
    }

    public set_rePassword(value: string): void {
        this._rePassword = value;
    }

    public get_conditions(): boolean {
        return this._conditions;
    }

    public set_conditions(value: boolean): void {
        this._conditions = value;
    }

  }
