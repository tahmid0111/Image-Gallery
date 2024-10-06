import React from "react";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";

const PlaceImage = ({ scrollPosition, item }) => {
  return (
    <div>
      <LazyLoadImage
        scrollPosition={scrollPosition}
        src={item.image}
        width="50%"
        height={500}
        alt={item.alt}
      />
    </div>
  );
};

export default trackWindowScroll(PlaceImage);
