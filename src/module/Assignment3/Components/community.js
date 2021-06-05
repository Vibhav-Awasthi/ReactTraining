import React from "react";

const comm = (props) => {
  return (
    <div className={"communityName"}>
      <div className={"com"}>
        <img id={"community_img"} alt={"community"} src={props.src}></img>
        <p>{props.name}</p>
      </div>
    </div>
  );
};

export default comm;
