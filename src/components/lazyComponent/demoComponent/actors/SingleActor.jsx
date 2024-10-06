import React from "react";

const SingleActor = (props) => {
  const { id, name, image, awards, known_for } = props.actor;
  return (
    <div className="col-span-4 mx-5 my-10 bg-blue-50 hover:bg-blue-200 hover:delay-50 pt-5 rounded-t-2xl">
      <img src={image} alt="" className="mx-auto rounded" />
      <div className="content-area text-center pb-5">
        <h1 className="text-3xl font-bold text-center pt-5">{name}</h1>
        <p className="text-xl text-blue-500">Awards: {awards[0]}</p>
        <p className="pt-3 text-xl font-bold text-orange-500">Top Movies</p>
        <ul>
          <li>{known_for[0]}</li>
          <li>{known_for[1]}</li>
        </ul>
      </div>
    </div>
  );
};

export default SingleActor;
