import React from "react";

const feat2 = (props) => {
  return (
      <div className={"feat"}>
    <div className={"featureList"}>
        <img class={"featureImg"} alt={"featureTab"} src={props.src}></img>
        <h2 className={"featureClick"}>{props.head}</h2>
        <p className={"featureDesc"}>{props.para}</p>
    </div>
    </div>
  );
};

export default feat2;