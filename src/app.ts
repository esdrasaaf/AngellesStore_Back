import express, { Express } from "express";
import cors from "cors";

import { loadEnv, connectDb, disconnectDB } from "./config";

loadEnv();

import { authenticationRouter, brandRouter, categoryRouter, colorRouter, historicRouter, productsRouters, promotionImagesRouter } from "@/routers";

const app = express();

app
  .use(cors())
  .use(express.json())
  .get("/health", (_req, res) => res.send("OK!"))
  .use("/auth", authenticationRouter)
  .use("/categories", categoryRouter)
  .use("/brands", brandRouter)
  .use("/colors", colorRouter)
  .use("/promos", promotionImagesRouter)
  .use("/products", productsRouters)
  .use("/historic", historicRouter)

export function init(): Promise<Express> {
    connectDb();
    return Promise.resolve(app);
}
  
export async function close(): Promise<void> {
    await disconnectDB();
}
  
export default app;
  