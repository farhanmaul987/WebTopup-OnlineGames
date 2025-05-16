import connectDB from "./mongoose";
import { productList } from "@models/ProductModel";

export const getAllProducts = async () => {
  try {
    await connectDB();
    const products = await productList.find({}).lean();
    return products;
  } catch (error) {
    console.error("Error in getAllProducts:", error);
    return [];
  }
};
