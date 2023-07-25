import "reflect-metadata";
import express, { Application } from "express";
import Server from "./config/server.config";
import Routes from "./config/routes.config";

const app: Application = express();

app.use(express.json());

new Server(app).connect();
export default app;
