const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const app = express();
app.use(helmet());
app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

// Import routes
import UserRoutes from "./routes/UserRoutes";
import CardRoutes from "./routes/CardRoutes";

// Use routes
app.use("/", UserRoutes);
app.use("/", CardRoutes);

const winston = require("winston");
const { combine, timestamp, label, printf } = winston.format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = winston.createLogger({
  level: "info",
  format: combine(label({ label: "my-app" }), timestamp(), myFormat),
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

export { app, logger };
