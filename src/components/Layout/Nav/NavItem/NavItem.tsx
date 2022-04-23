import { ArrowDown, ArrowUp } from "components/Icons";
import "components/Layout/Nav/NavItem/NavItem.css";
import useBoolean from "hooks/useBoolean";
import useClickOutside from "hooks/useClickOutside";
import React from "react";
import {
  DropdownListItem,
  NavItemAnchor,
  NavItemWithDropdown,
} from "../navigation";

const AnchorItem: React.FC<{ item: NavItemAnchor }> = ({ item }) => {
  return (
    <li className="NavItem">
      <a className="NavItem__button" href={item.href}>
        {item.label}
      </a>
    </li>
  );
};

const DropdownItem: React.FC<{ item: NavItemWithDropdown }> = ({ item }) => {
  const {
    state: isOpen,
    toggle: toggleDropdown,
    setFalse: closeDropdown,
  } = useBoolean();

  const buttonRef = React.useRef<HTMLButtonElement>(null);

  return (
    <li className="NavItem">
      <button
        className={`NavItem__button ${isOpen ? "NavItem__button--open" : ""}`}
        onClick={toggleDropdown}
        ref={buttonRef}
      >
        {item.label}
        {isOpen ? <ArrowUp size={9} /> : <ArrowDown size={9} />}
      </button>
      <Dropdown
        buttonRef={buttonRef}
        items={item.dropdown}
        isOpen={isOpen}
        closeDropdown={closeDropdown}
      />
    </li>
  );
};

const Dropdown: React.FC<{
  buttonRef: React.RefObject<HTMLButtonElement>;
  items: DropdownListItem[];
  isOpen: boolean;
  closeDropdown: () => void;
}> = ({ buttonRef, items, isOpen, closeDropdown }) => {
  const dropdownRef = React.useRef<HTMLUListElement>(null);

  const handleClose = () => {
    const isSmallScreen = window.matchMedia("(max-width: 899px)").matches;

    if (isSmallScreen) return;

    closeDropdown();
  };

  useClickOutside([dropdownRef, buttonRef], handleClose);

  return (
    <ul
      className={`Dropdown ${isOpen ? "Dropdown--open" : "Dropdown--close"}`}
      ref={dropdownRef}
    >
      {items.map((item, index) => (
        <li key={index} className="Dropdown__item">
          <a href={item.href}>
            {item.Icon && <item.Icon />} {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

const NavItem: React.FC<{ item: NavItemAnchor | NavItemWithDropdown }> = ({
  item,
}) => {
  switch (item.type) {
    case "dropdown":
      return <DropdownItem item={item} />;
    case "anchor":
      return <AnchorItem item={item} />;
    default:
      return null;
  }
};

export default NavItem;
