import { injectable } from "tsyringe";
import GetUrlService from "../services/get.url.service";
import GetUrlsService from "../services/get.urls.service";
import CreateUrlService from "../services/create.url.service";
import DeleteUrlService from "../services/delete.url.service";
import { NextFunction, Request, Response } from "express";

@injectable()
export default class UrlController {
  constructor(
    private getService: GetUrlService,
    private getsService: GetUrlsService,
    private createService: CreateUrlService,
    private deleteService: DeleteUrlService
  ) {}
  async readOne(req: Request, res: Response, next: NextFunction) {
    return this.getService.execute(req, res, next);
  }
  async readAll(req: Request, res: Response, next: NextFunction) {
    return this.getsService.execute(req, res, next);
  }
  async createOne(req: Request, res: Response, next: NextFunction) {
    return this.createService.execute(req, res, next);
  }
  async deleteOne(req: Request, res: Response, next: NextFunction) {
    return this.deleteService.execute(req, res, next);
  }
}
