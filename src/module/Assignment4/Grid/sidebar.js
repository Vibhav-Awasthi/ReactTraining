import React from "react";
import "./grid.css";

const Sidebar = (props) => {
  return (
    <li>
      <button>{props.content}</button>
    </li>
  );
};

export default Sidebar;