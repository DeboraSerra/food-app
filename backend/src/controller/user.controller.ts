import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import CodeError from "../helpers/error.helper";
import jwt from "../helpers/jwt.helper";
import { AuthRequest, JWTUser } from "../interfaces/user.interface";
import UserService from "../services/user.services";

const SALT_ROUNDS = 10;

async function hashPassword(password: string) {
  return await bcrypt.hash(password, SALT_ROUNDS);
}
class UserController {
  static async createUser(req: Request, res: Response) {
    const { password, ...user } = req.body;
    const hashPass = await hashPassword(password);
    const created = await UserService.createUser({
      ...user,
      password: hashPass,
    });
    const token = jwt.generateToken(created as JWTUser);
    res.status(200).json({ user: created, token });
  }

  static async getUser(req: Request, res: Response) {
    const { password, email } = req.body;
    const { password: pass, phone, ...foundUser } = await UserService.getUser(email);
    const match = await bcrypt.compare(password, pass);
    if (!match) {
      throw new CodeError(400, "Email or password is wrong");
    }
    const token = jwt.generateToken(foundUser as JWTUser);
    res.status(200).json({ user: foundUser, token });
  }

  static async updateUser(req: AuthRequest, res: Response) {
    const { id } = req.user as JWTUser;
    const { password, ...user } = req.body;
    const hashPass = await hashPassword(password);
    const updated = await UserService.updateUser(Number(id), {
      ...user,
      password: hashPass,
    });
    const token = jwt.generateToken(updated as JWTUser);
    res.status(200).json({ user: updated, token });
  }

  static async updatePassword(req: Request, res: Response) {
    const { email, password, phone, fullName } = req.body;
    const findUser = await UserService.getUser(email);
    const hashPass = await hashPassword(password);
    if (findUser.fullName === fullName && findUser.phone === phone) {
      const updated = await UserService.updatePassword({
        email,
        password: hashPass,
      });
      const token = jwt.generateToken(updated as JWTUser);
      res.status(200).json({ user: updated, token });
      return;
    }
    throw new CodeError(400, "Information provided don't match");
  }

  static async deleteUser(req: AuthRequest, res: Response) {
    const { id } = req.user as JWTUser;
    const deleted = await UserService.deleteUser(Number(id));
    res.status(200).json({ user: deleted });
  }
}

export default UserController;
