import mongoose, { Schema, model } from "mongoose";
import URL from "../interface/url.interface";

const UrlSchema: Schema = new Schema<URL>(
  {
    full_link: {
      type: Schema.Types.String,
      required: [true, "url is required!"],
    },
    short_link: {
      type: Schema.Types.String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model<URL>("URL", UrlSchema);
