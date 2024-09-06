import mongoose, { Schema } from "mongoose";

interface IProduct {
  title: string;
  description: string;
  category: string;
  brand: string;
  price: number;
  discount: {
    percentage: number;
    isActive: boolean;
    startDate?: Date;
    endDate?: Date;
  };
  stock: number;
  rating: number;
  colors: string[];
  sizes: string[];
  images: {
    url: string;
    alt?: string;
  }[];
}

const productSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    category: { type: String, required: true },
    brand: { type: String, default: "" },
    price: { type: Number, required: true },
    discount: {
      percentage: { type: Number, required: true },
      isActive: { type: Boolean, default: true },
      startDate: { type: Date },
      endDate: { type: Date },
    },
    stock: { type: Number, required: true },
    rating: { type: Number, default: 0 },
    colors: [{ type: String }],
    sizes: [{ type: String }],
    images: [
      {
        url: { type: String, required: true },
        alt: { type: String },
      },
    ],
  },
  { timestamps: true }
);

const Product = mongoose.model<IProduct>("Product", productSchema);

export default Product;
export type { IProduct };
