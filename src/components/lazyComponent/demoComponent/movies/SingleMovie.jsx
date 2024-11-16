import React from 'react';

const SingleMovie = (props) => {
  const { id, title, posterURL } = props.movie;
  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-4 mx-1 sm:mx-5 my-5 xl:my-10 border p-4 rounded shadow">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-700 mb-2">Movie ID: {id}</p>
      {posterURL ? (
        <img src={posterURL} alt={title} className="w-full h-auto rounded" />
      ) : (
        <p className="text-gray-500 italic">No poster available</p>
      )}
    </div>
  );
};

export default SingleMovie;

