import { Router } from "express";
import UserController from "../controller/user.controller";
import p from "../models";
import UserModel from "../models/user.model";
import UserService from "../services/user.services";
import authenticateJWT from "../middlewares/jwt.middleware";

const route = Router();

const model = new UserModel(p);
const service = new UserService(model);
const controller = new UserController(service);

route.route("/sign-up").post(controller.createUser);
route.route("/login").post(controller.getUser);

route.use(authenticateJWT)

route.route("/reset-password").post(controller.updatePassword)
route.route("/update-info").post(controller.updateUser)
route.route("/delete-user").delete(controller.deleteUser)
