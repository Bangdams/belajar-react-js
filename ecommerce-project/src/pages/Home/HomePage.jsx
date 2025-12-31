import axios from "axios";
import "./HomePage.css";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Products } from "./Products";

export function HomePage({ carts, loadCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const apiProducts = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    };

    apiProducts();
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>
      <Header carts={carts} />

      <div className="home-page">
        <div className="products-grid">
          {products.map((product) => {
            return (
              <Products
                key={product.id}
                product={product}
                loadCart={loadCart}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
