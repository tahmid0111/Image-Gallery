import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="grid grid-cols-12" aria-label="Navigation Section">
      <div className="col-span-12 text-center mx-5">
        <Link to="/" aria-label="Wild Photos">
          <p className="bg-pink-600 text-white py-3 rounded-lg w-32 inline-block px-5 md:px-10 m-3 md:m-5 hover:scale-105 transition">
            Wild
          </p>
        </Link>
        <Link to="/image/places" aria-label="Places Photos">
          <p className="bg-green-600 text-white py-3 rounded-lg w-32 inline-block px-5 md:px-10 m-3 md:m-5 hover:scale-105 transition">
            Places
          </p>
        </Link>
        <Link to="/image/buildings" aria-label="Buildings Photos" className="">
          <p className="bg-yellow-500 text-white py-3 rounded-lg w-32 inline-block px-5 md:px-10 m-3 md:m-5 hover:scale-105 transition">
            Buildings
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
