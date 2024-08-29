import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import Card from "./Card";
import { topics } from "../constants/topic";

const Help = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Konten Utama */}
      <div className="flex-grow">
        <Banner
          title="Selamat datang di Layanan PaDi UMKM, Ada yang bisa kami bantu?"
          buttonText="Selengkapnya"
          imageSrc="/assets/hero.webp"
          onButtonClick={() => console.log("Button clicked!")}
        />
        <h1 className="font-bold text-3xl text-center mt-10">
          Pilih Topik Sesuai Kebutuhanmu
        </h1>
        <div className="flex overflow-x-auto px-36 space-x-4 p-4 mb-40">
          {topics.map((item, index) => (
            <Card key={index} title={item.title} subTitles={item.subTitles} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Help;
