import React from "react";
import './Button.css'

export interface IButtonProps {
  onSubmit: Function;
  text: string;
}

const Button: React.FC<IButtonProps> = ({ onSubmit, text }) => {
  return (
    <button className="button" onClick={() => onSubmit()}>
      {text}
    </button>
  );
};

export default Button;
