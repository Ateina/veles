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
                label="Тип"
                filterName="type"
                filteredValues={ArrayUtility.RemoveDuplicates(props.pets, 'type')}
                filterPets={props.filterPets} />
            <CheckBoxFilter
                label="Пол"
                filterName="sex"
                isChecked={false}
                filteredValues={ArrayUtility.RemoveDuplicates(props.pets, 'sex')}
                filterPets={props.filterPets} />
        </div>
    );
}

export default CatalogFilters;