import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const ProductList = ({
  title,
  imageSrc,
  description,
  datePosted,
  detailLink,
}) => {
  return (
    <div className="p-4 rounded-md border w-full h-auto flex flex-col">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-32 object-cover rounded-md mb-4"
      />

      <h2 className="text-xl text-black font-bold mb-2">{title}</h2>

      <p className="text-sm text-black font-light mb-2">{description}</p>

      <p className="text-xs text-gray-500 mb-4">{datePosted}</p>

      <Link to={detailLink}>
        <Button
          text={"Lihat Detail"}
          className="text-sm py-2 px-4 rounded-xl bg-sky-600 text-white hover:bg-sky-500 transition"
        />
      </Link>
    </div>
  );
};

export default ProductList;
