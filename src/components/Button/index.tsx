// Styles
import './style.css';

import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({id, children, ...rest}: ButtonProps) => {
  return (
    <button id="login-button" {...rest}>
        {children}
    </button>
  );
};

export {Button};