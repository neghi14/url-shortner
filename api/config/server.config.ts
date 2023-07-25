import http from "http";
import config from "config";
import databaseConfig from "./database.config";

export default class Server {
  port: number;
  server: http.Server;
  constructor() {
    this.port = config.get<number>("port");
    this.server = http.createServer();
  }

  connect() {
    this.server.listen(this.port, () => {
      console.log(`Server is up! at port ${this.port}`);
    });
    databaseConfig.connect();
  }
}
