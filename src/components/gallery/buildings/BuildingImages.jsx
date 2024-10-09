import React from "react";
import { buildingImages } from "../../../utils/images";
import SingleImage from "./SingleImage";

const BuildingImages = () => {
  let halfItems = buildingImages.length / 2;
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-6">
        {buildingImages.slice(0, halfItems).map((item) => (
          <SingleImage key={item.id} item={item} />
        ))}
      </div>
      <div className="col-span-6">
        {buildingImages.slice(halfItems).map((item) => (
          <SingleImage key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default BuildingImages;
