import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="grid grid-cols-12">
      <div className="col-span-12 mx-auto flex">
        <Link to="/">
          <button className="btn btn-outline btn-primary px-10 m-5">
            Wild
          </button>
        </Link>
        <Link to="/image/places">
          <button className="btn btn-outline btn-secondary px-10 m-5">
            Places
          </button>
        </Link>
        <Link to="/image/buildings">
          <button className="btn btn-outline btn-success px-10 m-5">
            Buildings
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
