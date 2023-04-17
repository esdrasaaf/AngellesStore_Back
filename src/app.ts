import express, { Express } from "express";
import cors from "cors";

import { loadEnv, connectDb, disconnectDB } from "./config";

loadEnv();

import { 
  authenticationRouter, 
  brandRouter, 
  cartRouter, 
  categoryRouter, 
  colorRouter, 
  browsingHistoryRouter, 
  productsRouters, 
  promotionImagesRouter, 
  savesRouters, 
  userRouters, 
  avaliationsRouter, 
  paymentRouter
} from "@/routers";

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
  .use("/browsingHistory", browsingHistoryRouter)
  .use("/cart", cartRouter)
  .use("/saves", savesRouters)
  .use("/user", userRouters)
  .use("/avaliations", avaliationsRouter)
  .use("/payment", paymentRouter)

export function init(): Promise<Express> {
    connectDb();
    return Promise.resolve(app);
}
  
export async function close(): Promise<void> {
    await disconnectDB();
}
  
export default app;
  