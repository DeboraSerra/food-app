import CodeError from "../helpers/error.helper";
import zod from "../helpers/zodSchemas.helper";
import { ForgotPassUser, User } from "../interfaces/user.interface";
import UserModel from "../models/user.model";

class UserService {
  static async createUser(user: User) {
    const valid = zod.user.parse(user);
    return await UserModel.createUser(valid as User);
  }

  static async updateUser(id: number, user: User) {
    const validUser = zod.user.parse(user);
    const validId = zod.id.parse(id);
    return await UserModel.updateUser(validUser as User, validId);
  }

  static async updatePassword(user: ForgotPassUser) {
    const validUser = zod.updatePassUser.parse(user);
    return await UserModel.updatePassword(validUser);
  }

  static async getUser(email: string) {
    const validEmail = zod.email.parse(email);
    const found = await UserModel.getUser(validEmail);
    if (!found) throw new CodeError(404, "User not found");
    return found;
  }

  static async deleteUser(id: number) {
    const validId = zod.id.parse(id);
    return await UserModel.deleteUser(validId);
  }
}

export default UserService;
