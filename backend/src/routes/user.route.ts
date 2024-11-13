import { Router } from "express";
import UserController from "../controller/user.controller";
import authenticateJWT from "../middlewares/jwt.middleware";

const route = Router();

route.route("/sign-up").post(UserController.createUser);
route.route("/login").post(UserController.getUser);
route.route("/reset-password").post(UserController.updatePassword);

route.use(authenticateJWT);

route.route("/update-info").post(UserController.updateUser);
route.route("/delete-user").delete(UserController.deleteUser);

export default route;
