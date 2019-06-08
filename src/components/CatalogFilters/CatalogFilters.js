import React from 'react';

import { InputFilter, CheckBoxFilter } from '../Filters/Filters';
import { ArrayUtility } from '../../utilities/utilities';
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
                filteredValues={ArrayUtility.RemoveDublicates(props.pets, 'type')}
                filterPets={props.filterPets} />
        </div>
    );
}

export default CatalogFilters;