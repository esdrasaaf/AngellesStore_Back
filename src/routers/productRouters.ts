import { getAllProducts, getBestSellersProducts, getProductByBrand, getProductByCategory, getProductByColor, getReleaseProducts } from "@/controllers";
import { authenticateToken } from "@/middlewares/authenticationMiddleware";
import { Router } from "express";

const productsRouters = Router();

productsRouters
  .all("/*", authenticateToken)
  .get("/", getAllProducts)
  .get("/categories/:categoryId", getProductByCategory)
  .get("/colors/:colorId", getProductByColor)
  .get("/brands/:brandId", getProductByBrand)
  .get("/releases", getReleaseProducts)
  .get("/bestsellers", getBestSellersProducts)
 
export { productsRouters };