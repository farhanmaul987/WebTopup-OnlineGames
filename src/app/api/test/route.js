import connectDB from "@lib/mongoose";
import { NextResponse } from "next/server";
import { productList } from "@models/ProductModel";

export async function GET() {
  try {
    await connectDB();

    const products = await productList.find().lean(); // Fetch data
    console.log("✅ Data dari DB:", products);

    return NextResponse.json(products); // Return array datanya
  } catch (err) {
    console.error("❌ Gagal fetch data:", err);
    return NextResponse.json(
      { error: "Failed to fetch data 😵" },
      { status: 500 },
    );
  }
}
