import React from "react";
import WildImage from "./WildImage";
import { wildImages } from "../../../data/images";


const WildImages = () => {
  return (
    <div className="grid grid-cols-12">
      {wildImages.map((item) => (
        <WildImage key={item.id} item={item} />
      ))}
    </div>
  );
};

export default WildImages;
