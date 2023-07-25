import { Application, NextFunction, Request, Response } from "express";
import vhost from "vhost";
import urlRouter from "../module/Url/routes/url.routes";

export default class Routes {
  app: Application;
  constructor(app: Application) {
    this.app = app;
  }
  connect() {
    this.app.get(
      "/health-check",
      (req: Request, res: Response, next: NextFunction) => {
        res.sendStatus(200);
      }
    );

    this.app.use("/api/v1/url", urlRouter);

    this.app.all("*", (req: Request, res: Response, next: NextFunction) => {
      res.status(404).json({
        message: "Page not found!",
      });
    });
  }
}
