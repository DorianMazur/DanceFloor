import React from "react";
import './Button.css'

export interface IButtonProps {
  onPress: Function;
  text: string;
}

const Button: React.FC<IButtonProps> = ({ onPress, text }) => {
  return (
    <button className="button" onClick={() => onPress()}>
      {text}
    </button>
  );
};

export default Button;
