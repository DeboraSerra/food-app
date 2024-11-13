import { NextFunction, Request, Response } from "express";
import CodeError from "../helpers/error.helper";

const ErrorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CodeError) {
    res.status(err.code).json({ message: err.message });
    return;
  }
  res.status(500).json({ message: `Something went wrong: ${err.message}` });
};

export default ErrorMiddleware;
