import React, { useEffect, useState } from "react";
import { getData } from "../../../../utils/api.helper";
import SingleActress from "./SingleActress";

const Actress = () => {
  const [actressess, setActressess] = useState([]);

  const fetchData = async () => {
    let url = `https://freetestapi.com/api/v1/actresses`;
    let res = await getData(url);
    setActressess(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="grid grid-cols-12">
      {actressess.slice(20, 29).map((actress) => (
        <SingleActress key={actress.id} actress={actress} />
      ))}
    </div>
  );
};

export default Actress;

