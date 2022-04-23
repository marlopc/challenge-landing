import Button from "components/Button/Button";
import Close from "components/Icons/Close";
import Menu from "components/Icons/Menu";
import "components/Layout/Nav/Nav.css";
import useBoolean from "hooks/useBoolean";
import React from "react";
import navigation from "./navigation";
import NavList from "./NavList/NavList";

const Drawer = () => {
  const closeDrawerRef = React.useRef<HTMLButtonElement>(null);
  const openDrawerRef = React.useRef<HTMLButtonElement>(null);
  const drawerRef = React.useRef<HTMLDivElement>(null);

  const { state: isOpen, setFalse: close, setTrue: open } = useBoolean();

  const handleClose = () => {
    openDrawerRef.current?.focus();
    close();
  };

  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        handleClose();
        e.preventDefault();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handler);
      closeDrawerRef.current?.focus();
    } else {
      window.removeEventListener("keydown", handler);
    }

    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [isOpen]);

  return (
    <div className="content__menu">
      <button className="menu__open" onClick={open} ref={openDrawerRef}>
        <Menu size={25} />
      </button>
      <div
        className={`menu__background ${
          isOpen ? "menu__background--open" : "menu__background--close"
        }`}
        onClick={close}
      />
      <div
        ref={drawerRef}
        className={`menu__list ${
          isOpen ? "menu__list--open" : "menu__list--close"
        }`}
      >
        <button
          className="list__close"
          onClick={handleClose}
          ref={closeDrawerRef}
        >
          <Close size={25} />
        </button>
        <NavList map={navigation} />
      </div>
    </div>
  );
};

const Nav = () => {
  return (
    <header className="Nav">
      <nav className="Nav__content">
        <span className="content__logo" />
        <Drawer />
        <div className="content__user">
          <Button as="a" href="/login" label="Login" />
          <Button as="a" href="/register" label="Register" border />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
