import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-center py-10 bg-gradient-to-r from-red-200 to-blue-300 grid grid-cols-12">
      <div className="col-span-12">
        <h1 className="text-5xl font-bold mb-5">React Lazy Loading</h1>
        <p className="mb-10 text-xl">You can check the Network tab in your browser for more clarity</p>
      </div>
      <div className="col-span-12">
        <Link to="/">
          <h1 className="btn btn-lg btn-info px-16 text-xl font-bold mr-10 mb-5">
            Image Gallery
          </h1>
        </Link>
        <Link to="/component">
          <h1 className="btn btn-lg btn-error px-16 text-xl font-bold">
            Lazy Component
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Header;
