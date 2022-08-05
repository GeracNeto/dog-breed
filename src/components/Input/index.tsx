//Styles
import './style.css';

import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = ({name, ...rest}: InputProps) => {
  return (
    <label htmlFor={name} id="login-input">
        <input {...rest} />
    </label>
  );
};

export {Input};