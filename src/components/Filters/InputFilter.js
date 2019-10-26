import React from 'react';

function InputFilter(props) {
    const { name, placeholder, filterPets } = props;
    return (
        <div className="filter-text filter">
            <input
                type="text"
                className="filter"
                name={name}
                placeholder={placeholder}
                onChange={filterPets}
            />
        </div>)
}

export default InputFilter;