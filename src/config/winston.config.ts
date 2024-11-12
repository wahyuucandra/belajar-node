import winston, { createLogger, format, transports } from "winston";
import env from "./env.config";

const levels = { error: 0, warn: 1, info: 2, http: 3, debug: 4 };

const level = () => {
  const isDevelopment = env.ENV === "development";
  return isDevelopment ? "debug" : "warn";
};

const colors = {
  error: "red",
  warn: "yellow",
  info: "green",
  http: "magenta",
  debug: "white",
};

winston.addColors(colors);

const logFormat = format.combine(
  format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
  format.colorize({ all: true }),
  format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
);

const loggerTransports = [
  new transports.Console(),
  new transports.File({ filename: "logs/error.log", level: "error" }),
  new transports.File({ filename: "logs/all.log" }),
];

export const loggerMoreAdvance = createLogger({
  level: level(),
  levels,
  format: logFormat,
  transports: loggerTransports,
});

export const loggerWinston = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logs/error.log", level: "error" }),
    new winston.transports.File({ filename: "logs/combined.log" }),
  ],
});


