import { Loader } from "lucide-react";
import React, { useEffect, useState } from "react";
import Card from "./componentes/Card";
import { useSearchParams } from "react-router-dom";

const LandingPage = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [limit, setLimit] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setIsLoading(true);
    setLimit(searchParams.get("limit"));

    fetch(
      `https://fakestoreapi.com/products?limit=${searchParams.get("limit")}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, [searchParams.get("limit")]);

  if (isLoading) {
    return (
      <div className="flex h-screen justify-center items-center w-full">
        <Loader className="animate-spin" />
      </div>
    );
  }

  function handleLimit() {
    setSearchParams({ limit: limit });
  }

  return (
    <div className="p-5">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold ">Or Products</h1>
        <div className="flex gap-2">
          <input
            placeholder="Set Limit"
            type="number"
            className="border px-2 py-1 rounded-md"
            onChange={(e) => setLimit(e.target.value)}
            value={limit}
          />
          <button className="border py-1 px-3 rounded-md" onClick={handleLimit}>
            Set
          </button>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5 gap-5">
        {products !== null &&
          products.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              title={product.title}
              desc={product.description}
              image={product.image}
            />
          ))}
      </div>
    </div>
  );
};

export default LandingPage;
