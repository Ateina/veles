import React from 'react';

function CheckBoxFilter(props) {
    const { label, filteredValues, filterName, filterPets } = props;

    return (
        <div className="filter-checkbox">
            <fieldset>
                <legend>{label}</legend>
                {filteredValues.map(value => {
                    return (
                        <div>
                            <input
                                type="checkbox"
                                id={value}
                                name={filterName}
                                value={value}
                                onChange={filterPets} />
                            <label>{value}</label>
                        </div>
                    )
                })}
            </fieldset>
        </div>)
}

export default CheckBoxFilter;