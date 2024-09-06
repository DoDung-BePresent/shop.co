import { Request, Response } from "express";
import { Product } from "../models";

// Get all products
// API: /api/products/
// UNPROTECTED
const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find({});

    return res.status(200).json({ products });
  } catch (error: any) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

// Add new product
// API: /api/products/add-product
// PROTECTED
const addProduct = async (req: Request, res: Response) => {
  try {
    const {
      title,
      description,
      category,
      brand,
      price,
      discount,
      stock,
      rating,
      colors,
      sizes,
      images,
    } = req.body;

    if (!title || !price || !category || !stock) {
      return res
        .status(400)
        .json({ message: "Title, Price, Category and Stock are required." });
    }

    const newProduct = new Product({
      title,
      description,
      category,
      brand,
      price,
      discount,
      stock,
      rating,
      colors,
      sizes,
      images,
    });

    const savedProduct = await newProduct.save();

    return res
      .status(201)
      .json({ message: "Product created successfully", product: savedProduct });
  } catch (error: any) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

export { addProduct, getProducts };
