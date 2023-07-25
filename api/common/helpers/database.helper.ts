import { Model } from "mongoose";
import { injectable } from "tsyringe";

@injectable()
export default class Query {
  readOne(model: Model<any>, query: Object) {
    return model.findOne(query);
  }
  readAll(model: Model<any>) {
    return model.find();
  }
  createOne(model: Model<any>, payload: Object) {
    return model.create(payload);
  }
  updateOne(model: Model<any>, query: Object, payload: Object) {
    return model.findOneAndUpdate(query, payload, {
      new: true,
      runValidators: true,
    });
  }
  deleteOne(model: Model<any>, query: Object) {
    return model.findOneAndDelete(query);
  }
}
