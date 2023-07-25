import mongoose, { Mongoose, MongooseOptions } from "mongoose";
import config from "config";

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
        console.log("connection Success");
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default new DB(mongoose);
