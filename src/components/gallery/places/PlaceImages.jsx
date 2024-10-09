import React from "react";
import { placeImages } from "../../../utils/images";
import SingleImage from "./SingleImage";

const PlaceImages = () => {
  let halfItems = placeImages.length / 2;
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 sm:col-span-6">
        {placeImages.slice(0, halfItems).map((item) => (
          <SingleImage key={item.id} item={item} />
        ))}
      </div>
      <div className="col-span-12 sm:col-span-6">
        {placeImages.slice(halfItems).map((item) => (
          <SingleImage key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PlaceImages;
