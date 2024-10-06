import React from "react";
import PlaceImage from "./PlaceImage";
import { placeImages } from "../../../utils/images";

const PlaceImages = () => {
  return (
    <div>
      {placeImages.map((item) => (
        <PlaceImage key={item.id} item={item} />
      ))}
    </div>
  );
};

export default PlaceImages;
