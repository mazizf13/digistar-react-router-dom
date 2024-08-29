import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import CardMedia from "./CardMedia";
import { media } from "../constants/media";

const Media = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Banner
          title="Selamat datang di Layanan Bantuan PaDi UMKM, Ada yang bisa kami bantu?"
          buttonText="Selengkapnya"
          imageSrc="/assets/hero.webp"
          onButtonClick={() => console.log("Button clicked!")}
        />
        <h1 className="font-bold text-3xl text-center justify-center mt-10">
          Media
        </h1>
        <p className=" text-sm text-gray-500 text-center justify-center">
          Informasi seputar PaDi UMKM
        </p>
        <div className="flex flex-row px-36 gap-5 space-y-4 mt-8 mb-40">
          {media.map((item, index) => (
            <CardMedia
              key={index}
              title={item.title}
              imageSrc={item.imageSrc}
              description={item.description}
              datePosted={item.datePosted}
              detailLink={item.detailLink}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Media;
