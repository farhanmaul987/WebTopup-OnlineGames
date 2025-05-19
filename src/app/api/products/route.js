// src/app/api/products/route.js

import { NextResponse } from "next/server";
import connectDB from "@lib/mongoose";
import { productList } from "@models/ProductModel";

export async function GET() {
  try {
    await connectDB();
    console.log("Connected to DB");

    const products = await productList.find().lean();
    console.log("Products found:", products.length); // Log jumlah produk

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("❌ Failed to fetch products:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
