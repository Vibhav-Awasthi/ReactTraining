import React from "react";

const crypto = (props) => {
  return (
    <div className={"cryptoFeat"}>
        <img alt={"buy"} src={props.src}></img>
        <div>
        <h1 className={"cryptoBuy"}>{props.head}</h1>
        <p>{props.content}</p>
        <button>{props.label}</button>
        </div>
    </div>
  );
};

export default crypto;