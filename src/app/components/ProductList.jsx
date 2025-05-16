import { getAllProducts } from "@lib/data";
import Link from "next/link";

export default async function ProductList() {
  const products = await getAllProducts();

  return (
    <section className="product-list">
      <div className="container">
        <div className="section-title"></div>
        <div className="game-grid">
          {products.map((product) => (
            <Link key={product._id} href="">
              <div
                className="game-card"
                style={{ backgroundImage: `url(${product.productThumbnail})` }}
              >
                <div className="card-content">
                  <div className="card-title">{product.productTitle}</div>
                  <div className="card-description">{product.developer}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
