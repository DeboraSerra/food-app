import cors from "cors";
import "dotenv/config";
import express, { ErrorRequestHandler } from "express";
import "express-async-errors";
import ErrorMiddleware from "./src/middlewares/error.middleware";

let { PORT } = process.env;
PORT = PORT ?? "3000";

const app = express();
app.use(express.json());
app.use(cors());

app.route("/healthy").get(async (req, res) => {
  res.status(200).send("Hello World");
});

app.use(ErrorMiddleware);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
