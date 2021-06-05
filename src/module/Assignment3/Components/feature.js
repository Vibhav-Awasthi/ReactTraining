import React from "react";

const feat = (props) => {
  return (
    <div className={"featureList"}>
        <img class={"featureImg"} alt={"featureTab"} src={props.src}></img>
        <h2 className={"featureClick"}>{props.head}</h2>
        <p className={"featureDesc"}>{props.para}</p>
        <p className={"readMore"}>{"Read more ->"}</p>
    </div>
  );
};

export default feat;