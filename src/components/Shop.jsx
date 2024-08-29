import React from "react";
import Footer from "./Footer";
import ProductList from "./ProductList";
import { productList } from "../constants/productList";

const Shop = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="flex flex-row px-36 gap-5 space-y-4 mt-8 mb-40">
          {productList.map((item, index) => (
            <ProductList
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

export default Shop;
