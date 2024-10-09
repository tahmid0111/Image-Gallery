import React from "react";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const SingleImage = ({ scrollPosition, item }) => {
  return (
    <div className="m-2">
      <LazyLoadImage
        scrollPosition={scrollPosition}
        src={item.image}
        width="100%"
        // height={500}
        alt={item.alt}
      />
    </div>
  );
};

export default trackWindowScroll(SingleImage);
