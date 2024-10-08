import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Banner
          title="Tentang Kami"
          subtitle="Mengenal PaDi UMKM yang hadir sebagai Marketplace B2B tepercaya di Indonesia, yang merupakan solusi bisnis bagi UMKM, BUMN, Perusahaan swasta, dan Pemerintah."
          buttonText="Selengkapnya"
          imageSrc="/assets/hero.webp"
          onButtonClick={() => console.log("Button clicked!")}
        />
      </div>

      <Footer />
    </div>
  );
};

export default About;
