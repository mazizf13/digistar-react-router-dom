import React from "react";
import Button from "./Button";

const Banner = ({ title, subtitle, buttonText, imageSrc, onButtonClick }) => {
  return (
    <section className="bg-sky-100 px-36 py-10 w-full rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Sebelah kiri: Title, Subtitle, dan Button */}
      <div className="flex flex-col justify-center">
        <h1 className="text-2xl font-bold text-black mb-4">{title}</h1>
        <p className="text-sm text-black mb-6">{subtitle}</p>
        <div className="flex justify-start">
          <Button
            text={buttonText}
            onClick={onButtonClick}
            className="text-sm py-2 px-4 rounded-xl bg-sky-600 text-white hover:bg-sky-500 transition"
          />
        </div>
      </div>

      {/* Sebelah kanan: Gambar */}
      <div className="flex justify-center">
        <img src={imageSrc} alt="Banner" className="rounded-xl object-cover" />
      </div>
    </section>
  );
};

export default Banner;
