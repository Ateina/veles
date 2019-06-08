import React from 'react';

import { InputFilter, CheckBoxFilter } from '../Filters/Filters';
import './styles.css';

function CatalogFilters(props) {
    return (
        <div className="filters-pets">
            <InputFilter
                name="name"
                placeholder="Search by name"
                filterPets={props.filterPets} />
            <CheckBoxFilter
                label="Type"
                filterName="type"
                filteredValues={["Cat", "Dog"]}
                filterPets={props.filterPets} />
        </div>
    );
}

export default CatalogFilters;