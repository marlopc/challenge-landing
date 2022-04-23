import React from "react";
import { Icon } from ".";

const ArrowDown: Icon = ({ size = 18 }) => {
  return (
    <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <path stroke="#686868" strokeWidth="1.5" fill="none" d="m1 1 4 4 4-4" />
    </svg>
  );
};

export default ArrowDown;
