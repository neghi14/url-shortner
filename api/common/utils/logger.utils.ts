import dayjs from "dayjs";
import pino from "pino";

const logger = pino({
  transport: {
    target: "pino-pretty",
  },
  base: {
    pid: false,
  },
  timestamps: () => `Time: "${dayjs().format()}"`,
});

export default logger;
