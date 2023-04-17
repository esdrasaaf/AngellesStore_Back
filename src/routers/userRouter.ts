import { getUserData, putUserData } from "@/controllers";
import { authenticateToken } from "@/middlewares/authenticationMiddleware";
import { Router } from "express";

const userRouters = Router();

userRouters
  .all("/*", authenticateToken)
  .get("/", getUserData)
  .put("/", putUserData)
 
export { userRouters };