const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");

const app = express();
app.use(xss());
app.use(helmet());
app.use(express.json());
app.use(cors());

// Import routes
import UserRoutes from "./routes/UserRoutes";
import CardRoutes from "./routes/CardRoutes";
import PictureRoutes from "./routes/PictureRoutes";

// Use routes
app.use("/pictures", PictureRoutes);
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
