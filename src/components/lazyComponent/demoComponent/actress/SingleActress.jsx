import React from "react";

const SingleActress = (props) => {
  const { id, name, image, nationality, most_famous_movies } = props.actress;
  return (
    <div className="col-span-4 mx-5 my-10 bg-pink-100 hover:bg-pink-200 hover:delay-50 pt-5 rounded-t-2xl">
      <img src={image} alt="" className="mx-auto w-3/4" />
      <div className="content-area text-center pb-5">
        <h1 className="text-3xl font-bold text-center pt-5">{name}</h1>
        <p className="text-xl text-blue-500">Nationality: {nationality}</p>
        <p className="pt-3 text-xl font-bold text-orange-500">Top Movies</p>
        <ul>
          <li>{most_famous_movies[0]}</li>
          <li>{most_famous_movies[1]}</li>
        </ul>
      </div>
    </div>
  );
};

export default SingleActress;
