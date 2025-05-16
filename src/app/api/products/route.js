import { NextResponse } from "next/server";
import connectDB from "@lib/mongoose";
import { productList } from "@models/ProductModel";

export async function GET() {
  try {
    await connectDB();

    const products = await productList.find();

    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 },
    );
  }
}
