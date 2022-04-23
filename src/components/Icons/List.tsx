import React from "react";
import { Icon } from ".";

const List: Icon = ({ size = 18 }) => {
  return (
    <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 3v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h1V1a1 1 0 1 1 2 0v1h2V1a1 1 0 1 1 2 0v1h2V1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 1 1Zm-2 3H2v1h10V6Zm0 3H2v1h10V9Zm0 3H2v1h10v-1Z"
        fill="#726CEE"
      />
    </svg>
  );
};

export default List;
