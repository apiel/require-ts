import * as dotenv from "dotenv";

dotenv.config();

export const config = {
  hello: "world",
  count: 123,
  abc: process.env.ABC || "aie aie aie",
};
