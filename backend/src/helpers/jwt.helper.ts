import "dotenv/config";
import jsonWT from "jsonwebtoken";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { JWTUser } from "../interfaces/user.interface";

const JWT_SECRET = process.env.JWT_SECRET ?? "jwt_secret";

interface JWTDecoded extends JwtPayload {
  data: JWTUser;
}

const generateToken = (payload: JWTUser, expiresIn = "1h") => {
  return jsonWT.sign({ data: payload }, JWT_SECRET, { expiresIn });
};

const verifyToken = (token: string) => {
  try {
    return jwtDecode<JWTDecoded>(token);
  } catch (error) {
    return null;
  }
};

const jwt = { generateToken, verifyToken };

export default jwt;
