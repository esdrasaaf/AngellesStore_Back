import { getAllCategories } from "@/controllers";
import { Router } from "express";

const categoryRouter = Router();

categoryRouter
  .get("/", getAllCategories)

export { categoryRouter };