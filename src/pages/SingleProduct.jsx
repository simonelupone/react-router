import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const getProductDetail = () => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
      setProduct(response.data);
    });
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div>
      <h1>Dettaglio</h1>

      <div className="h-64 w-full">
        <img
          className="w-full h-full object-contain object-center"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <div>
          <span className="font-semibold">Category:</span> {product.category}
        </div>
        <div>
          <span className="font-semibold">Price:</span> {product.price}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
