import React from "react";
import MovieImage from "./MovieImage";
import MovieDetails from "./details";

const MovieCard = (props) => {
  return (
    <div className={"cardContainer"}>
      <MovieImage src={props.obj.src} />
      <MovieDetails
        id={props.obj.id}
        title={props.obj.title}
        releaseDate={props.obj.releaseDate}
        rating={props.obj.rating}
      />
    </div>
  );
};

export default MovieCard;