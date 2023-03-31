import { deleteProductOfCart, getUserCart, postProductOnCart } from "@/controllers";
import { authenticateToken } from "@/middlewares/authenticationMiddleware";
import { Router } from "express";

const cartRouter = Router();

cartRouter
  .all("/*", authenticateToken)
  .get("/", getUserCart)
  .post("/", postProductOnCart)
  .delete("/:cartId", deleteProductOfCart)

export { cartRouter };