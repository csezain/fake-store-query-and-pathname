import { Loader } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const params = useParams();
  const id = params.id;

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-screen justify-center items-center w-full">
        <Loader className="animate-spin" />
      </div>
    );
  }

  return (
    product !== null && (
      <div className="w-full max-w-2xl mx-auto mt-10">
        <h1 className="text-2xl font-bold text-gray-700">Our Products</h1>
        <div className=" grid grid-cols-2 mt-10 gap-5">
          <img
            src={product.image}
            alt={product.title}
            className="w-full object-contain aspect-square"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-xl font-medium">{product.title}</h2>
            <p className="text-sm mt-2">{product.description}</p>
          </div>
        </div>
      </div>
    )
  );
};

export default Product;
