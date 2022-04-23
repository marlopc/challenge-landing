import { NavigationMap } from "components/Layout/Nav/navigation";
import NavItem from "components/Layout/Nav/NavItem/NavItem";
import "components/Layout/Nav/NavList/NavList.css";
import React from "react";

const NavList: React.FC<{ map: NavigationMap }> = ({ map }) => {
  return (
    <ul className="NavList">
      {map.map((item, index) => (
        <NavItem key={index} item={item} />
      ))}
    </ul>
  );
};

export default NavList;
