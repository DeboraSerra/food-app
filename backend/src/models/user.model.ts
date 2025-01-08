import p from ".";
import { ForgotPassUser, User } from "../interfaces/user.interface";

class UserModel {
  static async createUser(user: User) {
    return await p.user.create({
      data: user,
      select: { email: true, id: true, fullName: true, userType: true },
    });
  }

  static async getUser(email: string) {
    return await p.user.findUnique({
      where: { email },
      select: {
        email: true,
        id: true,
        fullName: true,
        userType: true,
        password: true,
        phone: true,
      },
    });
  }

  static async updateUser(user: User, id: number) {
    return await p.user.update({
      data: user,
      where: { id },
      select: { email: true, id: true, fullName: true, userType: true },
    });
  }

  static async updatePassword(user: ForgotPassUser) {
    return await p.user.update({
      data: { password: user.password },
      where: { email: user.email },
      select: { email: true, id: true, fullName: true, userType: true },
    });
  }

  static async deleteUser(id: number) {
    return await p.user.delete({
      where: { id },
      select: { email: true, id: true, fullName: true, phone: true },
    });
  }
}

export default UserModel;
