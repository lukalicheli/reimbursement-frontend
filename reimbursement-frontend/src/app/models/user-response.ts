export class UserResponse {
  constructor(
    public id: string,
    public givenName: string,
    public surname: string,
    public email: string,
    public username: string,
    public role: string,
    public isActive: boolean
  ) {}
}
