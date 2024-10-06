import React from "react";
import Header from "../components/shared/Header";
import Navbar from "../components/shared/Navbar";

const ImageLayout = (props) => {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="mx-20">{props.children}</div>
    </div>
  );
};

export default ImageLayout;
