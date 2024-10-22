import React from "react";

const Navbar2 = ({ onHandleCompo }) => {
  const handleClick = (compo) => {
    onHandleCompo(compo);
  };
  return (
    <nav className="grid grid-cols-12" aria-label="Navigation Section">
      <div className="col-span-12 text-center mx-2 sm:mx-5">
        <button
          onClick={() => handleClick("movies")}
          className="btn btn-outline btn-warning px-5 md:px-10 m-3 md:m-5"
          aria-label="Movies Section"
        >
          Movies
        </button>
        {/* <button
          onClick={() => handleClick("actors")}
          className="btn btn-outline btn-accent px-5 md:px-10 m-3 md:m-5"
        >
          Actors
        </button>
        <button
          onClick={() => handleClick("actress")}
          className="btn btn-outline btn-neutral px-5 md:px-10 m-3 md:m-5"
        >
          Actress
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar2;
