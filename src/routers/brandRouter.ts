import { getAllBrands } from "@/controllers";
import { Router } from "express";

const brandRouter = Router();

brandRouter
  .get("/", getAllBrands)

export { brandRouter };