import { confirmPurchase, deletePurchase, getUserPurchaseProducts, postPurchase } from "@/controllers";
import { authenticateToken } from "@/middlewares/authenticationMiddleware";
import { Router } from "express";

const paymentRouter = Router();

paymentRouter
  .all("/*", authenticateToken)
  .get("/", getUserPurchaseProducts)
  .post("/", postPurchase)
  .put("/confirm/:purchaseId", confirmPurchase)
  .delete("/cancel/:purchaseId", deletePurchase)
 
export { paymentRouter };