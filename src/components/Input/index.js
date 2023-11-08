import React from "react";
import * as C from "./styles";

const Input = ({ type, placeholder, value, onChange, onBlur }) => {
  return (
    <C.Input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      onBlur={onBlur}
    />
  );
};

export default Input;