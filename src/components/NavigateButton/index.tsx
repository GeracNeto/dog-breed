// Styles
import './style.css';

import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const NavigateButton = ({id, children, ...rest}: ButtonProps) => {
  return (
    <button id="navigate-button" {...rest}>
        {children}
    </button>
  );
};

export {NavigateButton};