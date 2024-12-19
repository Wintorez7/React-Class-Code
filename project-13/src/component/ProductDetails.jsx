import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        let response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        alert("Product details not found");
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-64 h-64 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg">Brand: {product.brand}</h3>
      <h3 className="text-lg">Price: ${product.price}</h3>
      <p className="text-gray-700 mt-2">{product.description}</p>
    </div>
  );
};

export default ProductDetails;
