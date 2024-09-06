import mongoose, { Schema } from "mongoose";

interface IReview {
  productId: mongoose.Types.ObjectId;
  rating: number;
  comment: string;
  reviewerName: string;
  reviewerEmail: string;
  createdAt: Date;
}

const reviewSchema: Schema = new Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
  reviewerName: { type: String, required: true },
  reviewerEmail: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Review = mongoose.model<IReview>("Review", reviewSchema);

export default Review;
export type { IReview };
