import { injectable } from "tsyringe";
import Query from "../../../common/helpers/database.helper";
import URL from "../interface/url.interface";
import urlSchema from "../schema/url.schema";

@injectable()
export default class UrlRepository {
  constructor(private query: Query) {}
  readOne(url: URL) {
    return this.query.readOne(urlSchema, url);
  }
  readAll() {
    return this.query.readAll(urlSchema);
  }
  createOne(payload: URL) {
    return this.query.createOne(urlSchema, payload);
  }
  updateOne(url: URL, payload: URL) {
    return this.query.updateOne(urlSchema, url, payload);
  }
  deleteOne(url: URL) {
    return this.query.deleteOne(urlSchema, url);
  }
}
