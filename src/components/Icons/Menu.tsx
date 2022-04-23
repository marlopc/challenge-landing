import React from "react";
import { Icon } from ".";

const Menu: Icon = ({ size = 18 }) => {
  return (
    <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <g fill="#151515">
        <path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z" />
      </g>
    </svg>
  );
};

export default Menu;
