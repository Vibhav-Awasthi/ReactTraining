import React from "react";

const crypto2 = (props) => {
  return (
    <div className={"cryptoFeat"}>
        <div>
        <h1 className={"cryptoBuy"}>{props.head}</h1>
        <p>{props.content}</p>
        <button>{props.label}</button>
        </div>
        <img alt={"buy"} src={props.src}></img>
    </div>
  );
};

export default crypto2;