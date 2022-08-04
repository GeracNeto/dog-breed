import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = ({name, ...rest}: InputProps) => {
  return (
    <label htmlFor={name} id="login-input">
        Login
        <input {...rest} />
    </label>
  );
};

export {Input};