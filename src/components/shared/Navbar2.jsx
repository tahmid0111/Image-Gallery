import React from "react";

const Navbar2 = ({ onHandleCompo }) => {
  const handleClick = (compo) => {
    onHandleCompo(compo);
  };
  return (
    <nav className="grid grid-cols-12">
      <div className="col-span-12 mx-auto flex">
        <button
          onClick={() => handleClick("movies")}
          className="btn btn-outline btn-warning px-10 m-5"
        >
          Movies
        </button>
        <button
          onClick={() => handleClick("actors")}
          className="btn btn-outline btn-accent px-10 m-5"
        >
          Actors
        </button>
        <button
          onClick={() => handleClick("actress")}
          className="btn btn-outline btn-neutral px-10 m-5"
        >
          Actress
        </button>
      </div>
    </nav>
  );
};

export default Navbar2;
