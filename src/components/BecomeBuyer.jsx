import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";

const BecomeBuyer = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Konten Utama */}
      <div className="flex-grow">
        <Banner
          title="HALAMAN GABUNG JADI PEMBELIIIIII"
          buttonText="Selengkapnya"
          imageSrc="/assets/hero.webp"
          onButtonClick={() => console.log("Button clicked!")}
        />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BecomeBuyer;
