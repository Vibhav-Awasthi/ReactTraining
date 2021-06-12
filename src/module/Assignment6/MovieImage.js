import React from "react";

const MovieImage = (props) => {
  return (
    <figure>
      <img className={"moviePoster"} src={props.src} alt={"movie-poster"} />
    </figure>
  );
};

export default MovieImage;