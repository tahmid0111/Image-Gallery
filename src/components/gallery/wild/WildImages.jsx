import React from "react";
import { wildImages } from "../../../utils/images";
import SingleImage from "./SingleImage";

const WildImages = () => {
  let halfItems = wildImages.length / 2;
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-6">
        {wildImages.slice(0, halfItems).map((item) => (
          <SingleImage key={item.id} item={item} />
        ))}
      </div>
      <div className="col-span-6">
        {wildImages.slice(halfItems).map((item) => (
          <SingleImage key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default WildImages;
