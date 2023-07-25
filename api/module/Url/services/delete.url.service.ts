import { injectable } from "tsyringe";
import { Service } from "../../../common/interface/service.interface";
import { NextFunction, Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import Http from "../../../common/utils/response.utils";
import UrlRepository from "../repository/url.repository";

@injectable()
export default class DeleteUrlService
  implements Service<Request, Response, NextFunction>
{
  constructor(private url: UrlRepository, private http: Http) {}
  async execute(
    req: Request<ParamsDictionary, any, URL, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<any> {
    try {
      const { url } = req.params;

      const data = await this.url.deleteOne({ short_link: url });
      if (!data) {
        return next();
      }

      this.http.Res({
        res,
        status: "success",
        statusCode: 200,
        message: "URL Deleted!",
        data,
      });
    } catch (error) {
      return next(error);
    }
  }
}
