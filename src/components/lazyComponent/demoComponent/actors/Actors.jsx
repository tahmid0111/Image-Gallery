import React, { useEffect, useState } from "react";
import { getData } from "../../../../utils/api.helper";
import SingleActor from "./SingleActor";

const Actors = () => {
  const [actors, setActors] = useState([]);

  const fetchData = async () => {
    let url = `https://freetestapi.com/api/v1/actors`;
    let res = await getData(url);
    setActors(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="grid grid-cols-12">
      {actors.slice(20, 29).map((actor) => (
        <SingleActor key={actor.id} actor={actor} />
      ))}
    </div>
  );
};

export default Actors;

