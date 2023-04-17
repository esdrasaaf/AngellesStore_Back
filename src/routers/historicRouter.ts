import { getHistoricNavigation, postHistoric } from "@/controllers";
import { authenticateToken } from "@/middlewares/authenticationMiddleware";
import { Router } from "express";

const historicRouter = Router();

historicRouter
  .all("/*", authenticateToken)
  .get("/", getHistoricNavigation)
  .post("/", postHistoric)
 
export { historicRouter };