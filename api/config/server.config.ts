import config from "config";
import logger from "../common/utils/logger.utils";
import databaseConfig from "./database.config";
import { Application } from "express";
import Routes from "./routes.config";

export default class Server {
  port: number;
  server: Application;
  constructor(app: Application) {
    this.port = config.get<number>("port");
    this.server = app;
  }

  connect() {
    this.server.listen(this.port, () => {
      logger.info(`Server is up! at port ${this.port}`);
    });
    databaseConfig.connect();
    new Routes(this.server).connect();
  }
}
