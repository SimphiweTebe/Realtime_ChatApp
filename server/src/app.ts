import dotenv from 'dotenv'
dotenv.config()
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import config from "config";
import logger from "./utils/logger";

import socket from "./socket";

const port = config.get<number>("port");
const host = config.get<string>("host");
const corsOrigin = config.get<string>("corsOrigin");

const app = express();

const httpServer = createServer(app)
const CORS_ORIGIN = process.env.CORS_ORIGIN
const PORT = process.env.PORT
const HOST = process.env.HOST


const io = new Server(httpServer, {
  cors: {
    origin: CORS_ORIGIN,
    credentials: true,
  },
});

app.get("/", (_, res) =>
  res.send(`Server is up and running`)
);

httpServer.listen(PORT, () => {
  logger.info(`🚀 Server is listening 🚀`)
  logger.info(`http://${host}:${PORT}`)

  // socket({ io });
});