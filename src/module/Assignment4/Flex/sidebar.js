import React from "react";
import "./flex.css";

const SidebarButton = (props) => {
  return (
    <li>
      <button>{props.content}</button>
    </li>
  );
};

export default SidebarButton;