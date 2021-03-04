import React from "react";
import './Input.css'

export interface IInputProps {
  name: string;
  value: number | null;
  label: string;
  onChange(text: number): void;
}

const Input: React.FC<IInputProps> = ({ name, value, onChange, label }) => {
  return (
    <input
      className="input"
      name={name}
      type="number"
      value={value || ''}
      onChange={(e) => onChange(Number(e.target.value))}
      placeholder={label}
      onFocus={(event) => event.target.select()}
    />
  );
};

export default Input;
