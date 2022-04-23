import "components/Button/Button.css";
import React from "react";

type ButtonProps = {
  label: string;
  href?: string;
  onClick?: () => void;
  as?: "button" | "a";
  border?: boolean;
};
const Button: React.FC<ButtonProps> = ({
  border,
  href,
  label,
  onClick,
  as = href ? "a" : "button",
}) => {
  const classNames = `Button ${border ? "Button--border" : ""}`;

  switch (as) {
    case "a":
      return (
        <a href={href} className={classNames}>
          {label}
        </a>
      );
    case "button":
      return (
        <button className={classNames} onClick={onClick}>
          {label}
        </button>
      );
  }
};

export default Button;
