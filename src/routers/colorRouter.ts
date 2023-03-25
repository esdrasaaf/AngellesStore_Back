import { getAllColors } from "@/controllers";
import { Router } from "express";

const colorRouter = Router();

colorRouter
  .get("/", getAllColors)

export { colorRouter };