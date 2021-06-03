import React, { Component } from "react";

export default class reusableBox extends Component {
  render() {
    const { heading, buttonTitle } = this.props;
    return (
      <div className={"itemContainer"}>
        <h3>{heading}</h3>
        <button>{buttonTitle}</button>
      </div>
    );
  }
}