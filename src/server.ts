import "reflect-metadata";
import "express-async-errors";

import express, { NextFunction, Request, Response } from "express";
import cors from "cors";

import "./container";

import { routes } from "./routes";

import { AppError } from "./errors/AppError";

import "./database";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
    });
  }

  return response.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`,
  });
});

app.listen(3333, () => {
  console.log("Server started on port 3333!");
});
