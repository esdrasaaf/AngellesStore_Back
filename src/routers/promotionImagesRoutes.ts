import { getAllPromotionImages } from "@/controllers";
import { Router } from "express";

const promotionImagesRouter = Router();

promotionImagesRouter
  .get("/", getAllPromotionImages)

export { promotionImagesRouter };