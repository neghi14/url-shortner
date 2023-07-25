import { Response } from "express";
import { injectable } from "tsyringe";

@injectable()
export default class Http {
  Res({ res, status, statusCode, message, data }: IResponse) {
    res.status(statusCode).json({
      status,
      message,
      data,
    });
  }
}

interface IResponse {
  res: Response;
  status: "error" | "success";
  statusCode: number;
  message: string;
  data: any;
}
