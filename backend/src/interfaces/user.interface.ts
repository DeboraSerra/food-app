import { Request } from "express";

export interface User {
  id?: number;
  fullName: string;
  email: string;
  password: string;
  phone: string;
  birthday: Date;
  userType: 0 | 1 | 2;
}

export interface ForgotPassUser {
  email: string;
  password: string;
}

export interface JWTUser {
  id: number;
  fullName: string;
  email: string;
  userType: 0 | 1 | 2;
}

export interface AuthRequest extends Request {
  user?: JWTUser;
}
