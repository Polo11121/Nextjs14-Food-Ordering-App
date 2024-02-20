import { cleanEnv, str } from "envalid";

export const env = cleanEnv(process.env, {
  MONGO_URL: str(),
  NEXT_AUTH_URL: str(),
});
