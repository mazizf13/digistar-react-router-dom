import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sky-600 text-white py-4 w-full">
      <div className="container mx-auto flex justify-center">
        <p className="text-center">
          © {currentYear} Pasar Digital UMKM Indonesia. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
