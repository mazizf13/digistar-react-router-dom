import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Banner
          title="PaDi UMKM Hadir Sebagai Satu Solusi Bisnis bagi UMKM, BUMN dan Pemerintah."
          subtitle="Mempertemukan UMKM berkualitas dengan perusahaan BUMN maupun Swasta untuk mendapatkan transaksi dengan harga dan kualitas terbaik."
          buttonText="Selengkapnya"
          imageSrc="/assets/hero.webp"
          onButtonClick={() => console.log("Button clicked!")}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
