export interface IUser {
  id?: number;
  fullName: string;
  email: string;
  password: string;
  phone: string;
  birthday: Date;
  userType: 0 | 1 | 2;
  image?: string;
}
