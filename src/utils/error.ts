import { Request, Response, NextFunction } from "express";
import {loggerWinston , loggerMoreAdvance} from "../config/winston.config";
import { formatResponse } from "./formatResponse";

export const createError = (message: string, code: number) => {
    return new Error(message)
}

export const errorHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    //loggerMoreAdvance.error(`${err.statusCode} - ${err.message} - Winston`);
    const start = Date.now();
    res.on("finish", () => {
        const duration = Date.now() - start;
        loggerMoreAdvance.error(`${err.statusCode} - ${err.message} - ${duration} ms - Winston`);
    });
    res.status(statusCode).json(formatResponse(statusCode, message, null));
  };