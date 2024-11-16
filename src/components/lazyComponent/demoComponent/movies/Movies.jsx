import React, { useEffect, useState } from "react";
import { getData } from "../../../../utils/api.helper";
import SingleMovie from "./SingleMovie";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const fetchData = async () => {
    let url = `https://jsonplaceholder.typicode.com/posts`;
    let res = await getData(url);
    setMovies(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="grid grid-cols-12">
      {movies.slice(0, 9).map((movie) => (
        <SingleMovie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Movies;
