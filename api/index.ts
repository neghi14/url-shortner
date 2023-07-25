import "reflect-metadata";
import express, { Application } from "express";
import Server from "./config/server.config";

const app: Application = express();

new Server().connect();

export default app;
