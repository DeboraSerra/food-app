import zod from "../helpers/zodSchemas.helper";
import { ForgotPassUser, User } from "../interfaces/user.interface";
import UserModel from "../models/user.model";

class UserService {
  private readonly model: UserModel;
  constructor(model: UserModel) {
    this.model = model;
  }

  async createUser(user: User) {
    const valid = zod.user.parse(user);
    return await this.model.createUser(valid as User);
  }

  async updateUser(id: number, user: User) {
    const validUser = zod.user.parse(user);
    const validId = zod.id.parse(id);
    return await this.model.updateUser(validUser as User, validId);
  }
  
  async updatePassword(user: ForgotPassUser) {
    const validUser = zod.updatePassUser.parse(user);
    return await this.model.updatePassword(validUser);
  }

  async getUser(email: string) {
    const validEmail = zod.email.parse(email);
    return await this.model.getUser(validEmail);
  }

  async deleteUser(id: number) {
    const validId = zod.id.parse(id);
    return await this.model.deleteUser(validId);
  }
}

export default UserService;
