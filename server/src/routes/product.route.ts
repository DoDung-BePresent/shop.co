import express from "express";
import { addProduct, getProducts } from "../controllers/product.controller";

const router = express.Router();

router.use("/", getProducts);
router.use("/add-product", addProduct);

export default router;
