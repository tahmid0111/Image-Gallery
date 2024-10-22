import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="grid grid-cols-12" aria-label="Navigation Section">
      <div className="col-span-12 text-center mx-5">
        <Link to="/" aria-label="Wild Photos">
          <button className="btn btn-outline btn-primary px-5 md:px-10 m-3 md:m-5">
            Wild
          </button>
        </Link>
        <Link to="/image/places" aria-label="Places Photos">
          <button className="btn btn-outline btn-secondary px-5 md:px-10 m-3 md:m-5">
            Places
          </button>
        </Link>
        <Link to="/image/buildings" aria-label="Buildings Photos">
          <button className="btn btn-outline btn-success px-5 md:px-10 m-3 md:m-5">
            Buildings
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
