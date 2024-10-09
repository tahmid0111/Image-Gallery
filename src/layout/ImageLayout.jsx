import React from "react";
import Header from "../components/shared/Header";
import Navbar from "../components/shared/Navbar";

const ImageLayout = (props) => {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="mx-2 md:mx-10 xl:mx-20 mb-5 md:mb-10">{props.children}</div>
    </div>
  );
};

export default ImageLayout;
