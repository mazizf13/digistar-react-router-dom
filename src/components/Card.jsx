import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Card = ({ title, subTitles }) => {
  return (
    <div className="p-4 rounded-md border w-full h-auto flex flex-col">
      <h2 className="text-xl text-black font-bold mb-2">{title}</h2>
      <div className="flex flex-col space-y-1">
        {subTitles.map((subTitle, index) => (
          <Link
            key={index}
            to={`/details/${subTitle}`}
            className="text-sm text-black font-light hover:underline"
          >
            {subTitle}
          </Link>
        ))}
      </div>
      <div className="mt-4">
        <Button
          text={"Lihat Semua Artikel"}
          className="text-sm py-2 px-4 rounded-xl bg-sky-600 text-white hover:bg-sky-500 transition"
        />
      </div>
    </div>
  );
};

export default Card;
