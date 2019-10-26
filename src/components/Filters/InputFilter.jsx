import React from "react";
import TextField from "@material-ui/core/TextField";

function InputFilter(props) {
  const { name, placeholder, filterPets } = props;
  return (
    <TextField
      className="filter-text filter"
      id="filled-search"
      label={placeholder}
      onChange={filterPets}
      name={name}
      type="search"
      margin="normal"
    />
  );
}

export default InputFilter;
