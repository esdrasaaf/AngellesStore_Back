import { getHistoricNavigation, postHistoric } from "@/controllers";
import { authenticateToken } from "@/middlewares/authenticationMiddleware";
import { Router } from "express";

const browsingHistoryRouter = Router();

browsingHistoryRouter
  .all("/*", authenticateToken)
  .get("/", getHistoricNavigation)
  .post("/", postHistoric)
 
export { browsingHistoryRouter };