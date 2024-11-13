import { PrismaClient } from "@prisma/client";
import { ForgotPassUser, User } from "../interfaces/user.interface";

class UserModel {
  private readonly p: PrismaClient;
  constructor(p: PrismaClient) {
    this.p = p;
  }

  async createUser(user: User) {
    return await this.p.user.create({
      data: user,
      select: { email: true, id: true, fullName: true, userType: true },
    });
  }

  async getUser(email: string) {
    return await this.p.user.findFirstOrThrow({
      where: { email },
      select: {
        email: true,
        id: true,
        fullName: true,
        phone: true,
        password: true,
      },
    });
  }

  async updateUser(user: User, id: number) {
    return await this.p.user.update({
      data: user,
      where: { id },
      select: { email: true, id: true, fullName: true, userType: true },
    });
  }

  async updatePassword(user: ForgotPassUser) {
    return await this.p.user.update({
      data: { password: user.password },
      where: { email: user.email },
      select: { email: true, id: true, fullName: true, userType: true },
    });
  }

  async deleteUser(id: number) {
    return await this.p.user.delete({
      where: { id },
      select: { email: true, id: true, fullName: true, phone: true },
    });
  }
}

export default UserModel;
