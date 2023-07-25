import { NextFunction, Request, Response } from "express";
import { Service } from "../../../common/interface/service.interface";
import UrlRepository from "../repository/url.repository";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { injectable } from "tsyringe";
import Http from "../../../common/utils/response.utils";
import URL from "../interface/url.interface";
import { shorten } from "../../../common/utils/generator.utils";

@injectable()
export default class CreateUrlService
  implements Service<Request, Response, NextFunction>
{
  constructor(private url: UrlRepository, private http: Http) {}
  async execute(
    req: Request<ParamsDictionary, any, URL, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
    next: NextFunction
  ): Promise<any> {
    try {
      const { full_link } = req.body;

      const newUrlPayload = {
        full_link,
        short_link: shorten(),
      };

      const data = await this.url.createOne(newUrlPayload);

      this.http.Res({
        res,
        status: "success",
        statusCode: 201,
        message: "URL shortened!",
        data,
      });
    } catch (error) {
      return next(error);
    }
  }
}
