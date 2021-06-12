import React, { useState } from "react";
import MovieCard from "./movieCard";

import Data from "./movieInfo";

const MovieHomeScreen = () => {
  const [rating1, setRating1] = useState(Data[1].rating);
  const [rating3, setRating3] = useState(Data[3].rating);
  setTimeout(() => {
    setRating1(Math.round((rating1 + 0.1) * 10) / 10);
    setRating3(Math.round((rating3 + 0.1) * 10) / 10);
    Data[1].rating = rating1;
    Data[3].rating = rating3;
  }, 5000);
  return (
    <div>
      <div className={"movieCardContainer"}>
        {Data.map((curr, ind) => (
          <MovieCard key={ind} obj={curr} />
        ))}
      </div>
    </div>
  );
};

export default MovieHomeScreen;
