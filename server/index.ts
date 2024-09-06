import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Routes
import productRoutes from "./src/routes/product.route";

dotenv.config();

const app = express();
app.use(express.json());

// Product Routes
app.use("/api/products", productRoutes);

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log("Connect to database successfully");
    });
  })
  .catch((error) => {
    console.log(error);
  });
