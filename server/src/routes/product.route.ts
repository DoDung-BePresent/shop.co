import express from "express";
import {
  addProduct,
  getProductById,
  getProducts,
} from "../controllers/product.controller";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/add-product", addProduct);

export default router;
