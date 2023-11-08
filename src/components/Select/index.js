
import React from "react";
import * as C from "./styles";

const Select = ({ value, onChange, options }) => {
  return (
    <C.Select value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </C.Select>
  );
};

export default Select;