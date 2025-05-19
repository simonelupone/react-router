import { useState, useEffect } from "react";
import axios from "axios";
import MainNavbar from "../components/MainNavbar.jsx";

const Products = () => {
  const [products, setProducts] = useState(null);

  const getProducts = () => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
    });
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <MainNavbar />
      <h1 className="py-8">Elenco prodotti</h1>

      <div>
        {products === null ? (
          <div>Loading...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="max-w-sm rounded overflow-hidden shadow-lg hover:scale-105  cursor-pointer"
              >
                <div className="h-64 w-full">
                  <img
                    className="w-full h-full object-contain object-center"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{product.title}</div>
                  <p className="text-gray-700 text-base">
                    {product.description}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <div>
                    <span className="font-semibold">Birthday:</span>{" "}
                    {product.category}
                  </div>
                  <div>
                    <span className="font-semibold">Nationality:</span>{" "}
                    {product.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
