import { createClient, SetOptions } from "redis";
import env from "./env.config";

const client = createClient({
  url: `redis://localhost:${env.REDIS_PORT}`,
});

client.connect();

const setValue = async (key: string, value: string, options?: SetOptions) => {
  return await client.set(key, value, options);
};

const getValue = async (key: string) => {
  return await client.get(key);
};

const redisClient = {
  setValue,
  getValue,
};

export default redisClient;
