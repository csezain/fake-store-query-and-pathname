import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, desc, image, id }) => {
  return (
    <div className="border border-gray-300 rounded-md overflow-hidden p-3 hover:shadow-md transition hover:scale-105 flex flex-col">
      <img
        src={image}
        alt="card_header"
        className="aspect-square object-contain p-2"
      />
      <hr />

      <h2 className=" font-bold text-gray-700 mt-2 line-clamp-1">{title}</h2>
      <p className="text-gray-700 line-clamp-3 text-sm">{desc}</p>
      <div className="flex justify-end mt-auto pt-2">
        <Link to={`/products/${id}`} className="bg-cyan-500 text-white py-1 px-4 rounded-md">
          View
        </Link>
      </div>
    </div>
  );
};

export default Card;
