import React from "react";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

function CheckBoxFilter(props) {
  const { label, filteredValues, filterName, isChecked, filterPets } = props;

  return (
    <FormControl component="fieldset" className="filter">
      <FormLabel component="legend">{label}</FormLabel>
      <FormGroup>
        {filteredValues.map(value => {
          if (value) {
            return (
              <FormControlLabel
                key={value}
                control={
                  <Checkbox
                    checked={isChecked}
                    onChange={filterPets}
                    value={value}
                    color="default"
                  />
                }
                label={value}
                name={filterName}
              />
            );
          }
          return null;
        })}
      </FormGroup>
    </FormControl>
  );
}

export default CheckBoxFilter;
