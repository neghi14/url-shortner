import { container } from "tsyringe";
import { NextFunction, Request, Response, Router } from "express";
import UrlController from "../controller/url.controller";

const url = container.resolve(UrlController);

const urlRouter: Router = Router();

urlRouter
  .get("/", (req: Request, res: Response, next: NextFunction) =>
    url.readAll(req, res, next)
  )
  .post("/", (req: Request, res: Response, next: NextFunction) =>
    url.createOne(req, res, next)
  )
  .get("/:url", (req: Request, res: Response, next: NextFunction) =>
    url.readOne(req, res, next)
  )
  .delete("/:url", (req: Request, res: Response, next: NextFunction) =>
    url.deleteOne(req, res, next)
  );

export default urlRouter;
