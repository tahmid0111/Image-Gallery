import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-center py-10 bg-gradient-to-r from-red-200 to-blue-300 grid grid-cols-12">
      <div className="col-span-12 mx-2">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">React Lazy Loading</h1>
        <p className="mb-10 lg:text-xl">You can check the Network tab in your browser for more clarity</p>
      </div>
      <div className="col-span-12 mx-5">
        <Link to="/">
          <h1 className="btn md:btn-lg btn-info px-10 md:px-16 text-xl font-bold mx-2 md:mr-5 xl:mr-10 mb-5">
            Image Gallery
          </h1>
        </Link>
        <Link to="/component">
          <h1 className="btn md:btn-lg btn-error px-10 md:px-16 text-xl font-bold">
            Lazy Component
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Header;
