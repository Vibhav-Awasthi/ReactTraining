import React, { Component } from "react";
import "./index.css";

class Home extends Component {
  renderBox(title, buttonTitle){
    return(
      <div className={"itemContainer"}>
          <h3>{title}</h3>
          <button>{buttonTitle}</button>
        </div>
    );
  }
  render() {
    return (
      <div className={"homeContainer"}>
        <h1>{"Home Page"}</h1>
        {this.renderBox("First Container", "Click me First")}
        {this.renderBox("Second Container",'click me First')}
        {this.renderBox('first Container','click me first')}
      </div>
    );
  }
}

export default Home;
//export Home; for exporting more than one thing