import crypto from "crypto";

export const shorten = () => {
  return crypto.randomBytes(3).toString("hex");
};
