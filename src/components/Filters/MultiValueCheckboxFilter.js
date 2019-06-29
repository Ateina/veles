import React from 'react';

function MultiValueCheckboxFilter(props) {
    const { label, filteredValues, filterName, isChecked, filterPets } = props;

    return (
        <div className="filter-checkbox">
            <fieldset>
                <legend>{label}</legend>
                {filteredValues.map(value => {
                    if (value) {
                        return (
                            <div key={value}>
                                <input
                                    type="checkbox"
                                    id={value}
                                    name={filterName}
                                    value={value}
                                    checked={isChecked}
                                    onChange={filterPets} />
                                <label>{value}</label>
                            </div>
                        )
                    }
                    return null;
                })}
            </fieldset>
        </div>)
}

export default MultiValueCheckboxFilter;