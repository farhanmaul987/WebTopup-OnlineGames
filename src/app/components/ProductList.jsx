"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) =>
          product.category?.includes(selectedCategory),
        );

  const categories = [
    { label: "All", value: "all" },
    { label: "Mobile Games", value: "mobile_games" },
    { label: "PC Games", value: "pc_games" },
  ];

  return (
    <section className="product-list">
      <div className="section-title"></div>
      <div className="heading-4">Daftar Produk</div>
      <div className="text-gray-400">Temukan game yang kamu inginkan</div>

      <div className="mt-3 flex flex-row gap-x-2">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.value;
          return (
            <button
              key={cat.value}
              className={`category ${
                isActive
                  ? "bg-prRed text-white hover:bg-srRed"
                  : "bg-gray-800 text-white hover:bg-gray-900"
              }`}
              onClick={() => setSelectedCategory(cat.value)}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <div className="game-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link key={product._id} href={`/product/${product._id}`}>
              <div
                className="game-card"
                style={{
                  backgroundImage: `url(${product.productThumbnail})`,
                }}
              >
                <div className="card-content">
                  <div className="card-title">{product.productTitle}</div>
                  <div className="card-description">{product.developer}</div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="mt-4 text-gray-500">Produk tidak ditemukan 😢</div>
        )}
      </div>
    </section>
  );
}
