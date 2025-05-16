import { models, model, Schema } from "mongoose";

const ItemSchema = new Schema({
  prd_id: { type: Number, required: true },
  nominal: { type: String, required: true },
  price: { type: String, required: true },
  realPrice: { type: Number, required: true },
});

const productSchema = new Schema(
  {
    productName: { type: String, required: true },
    productTitle: { type: String, required: true },
    developer: { type: String, required: true },
    productThumbnail: { type: String, required: true },
    items: [ItemSchema],
  },
  {
    timestamps: true,
  },
);

export const productList =
  models.productList || model("productList", productSchema);
