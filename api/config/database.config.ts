import mongoose, { Mongoose, MongooseOptions } from "mongoose";
import config from "config";
import logger from "../common/utils/logger.utils";

class DB {
  configOptions: MongooseOptions;
  dbUri: string;
  mongoose: Mongoose;
  constructor(mongoose: Mongoose) {
    this.configOptions = {
      autoIndex: true,
    };
    this.dbUri = config.get<string>("db");
    this.mongoose = mongoose;
  }
  connect() {
    this.mongoose
      .connect(this.dbUri)
      .then(() => {
        logger.info("connection Success");
      })
      .catch((err) => {
        logger.warn(err);
      });
  }
}

export default new DB(mongoose);
