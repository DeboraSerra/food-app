import bcrypt from "bcrypt";
import { Request, Response } from "express";
import CodeError from "../helpers/error.helper";
import jwt from "../helpers/jwt.helper";
import { AuthRequest, JWTUser } from "../interfaces/user.interface";
import UserService from "../services/user.services";

const SALT_ROUNDS = 10;

class UserController {
  private readonly service: UserService;
  constructor(service: UserService) {
    this.service = service;
  }

  private async hashPassword(password: string) {
    return await bcrypt.hash(password, SALT_ROUNDS);
  }

  async createUser(req: Request, res: Response) {
    const { password, ...user } = req.body;
    const hashPassword = await this.hashPassword(password);
    const created = await this.service.createUser({
      ...user,
      password: hashPassword,
    });
    const token = jwt.generateToken(created as JWTUser);
    res.status(200).json({ user: created, token });
  }

  async getUser(req: Request, res: Response) {
    const { password, email } = req.body;
    const { password: pass, ...foundUser } = await this.service.getUser(email);
    const match = await bcrypt.compare(password, pass);
    if (!match) {
      throw new CodeError(400, "Email or password is wrong");
    }
    res.status(200).json({ user: foundUser });
  }

  async updateUser(req: AuthRequest, res: Response) {
    const { id } = req.user as JWTUser;
    const { password, ...user } = req.body;
    const hashPassword = await this.hashPassword(password);
    const updated = await this.service.updateUser(Number(id), {
      ...user,
      password: hashPassword,
    });
    const token = jwt.generateToken(updated as JWTUser);
    res.status(200).json({ user: updated, token });
  }

  async updatePassword(req: Request, res: Response) {
    const { email, password, phone, fullName } = req.body;
    const findUser = await this.service.getUser(email);
    const hashPassword = await this.hashPassword(password);
    if (findUser.fullName === fullName && findUser.phone === phone) {
      const updated = await this.service.updatePassword({
        email,
        password: hashPassword,
      });
      const token = jwt.generateToken(updated as JWTUser);
      res.status(200).json({ user: updated, token });
      return;
    }
    throw new CodeError(400, "Information provided don't match");
  }

  async deleteUser(req: AuthRequest, res: Response) {
    const { id } = req.user as JWTUser;
    const deleted = await this.service.deleteUser(Number(id));
    res.status(200).json({ user: deleted });
  }
}

export default UserController;
