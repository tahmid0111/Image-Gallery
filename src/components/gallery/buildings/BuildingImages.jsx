import React from "react";
import BuildingImage from "./BuildingImage";
import { buildingImages } from "../../../data/images";

const BuildingImages = () => {
  return (
    <div>
      {buildingImages.map((item) => (
        <BuildingImage key={item.id} item={item} />
      ))}
    </div>
  );
};

export default BuildingImages;