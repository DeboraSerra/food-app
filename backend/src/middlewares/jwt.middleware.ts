import { NextFunction, Request, Response } from "express";
import CodeError from "../helpers/error.helper";
import jwt from "../helpers/jwt.helper";
import { AuthRequest } from "../interfaces/user.interface";

const authenticateJWT = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers?.authorization?.split(" ")[1];
  if (!token) throw new CodeError(401, "No Token provided");

  try {
    const decoded = jwt.verifyToken(token);
    if (!decoded) {
      res.status(401).json({ error: "Invalid token" });
      return;
    }
    const expiresAt = new Date(decoded.exp as number);
    if (new Date() > expiresAt) {
      res.status(401).json({ error: "Token has expired" });
      return;
    }

    req.user = decoded.data;
    next();
  } catch (error) {
    console.error("Error authenticating token:", error);
    next(error);
  }
};

export default authenticateJWT;
