import React from 'react';

import { InputFilter, CheckBoxFilter, MultiValueCheckboxFilter } from '../Filters/Filters';
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
                label="Где находится животное"
                filterName="status"
                filteredValues={ArrayUtility.RemoveDuplicates(props.pets, 'status')}
                filterPets={props.filterPets} />
            <CheckBoxFilter
                label="Пол"
                filterName="sex"
                filteredValues={ArrayUtility.RemoveDuplicates(props.pets, 'sex')}
                filterPets={props.filterPets} />
            <MultiValueCheckboxFilter
                label="Хорошо ладит с:"
                filterName="friendly_with"
                filteredValues={ArrayUtility.RemoveMultiDuplicates(props.pets, 'friendly_with')}
                filterPets={props.filterPets} />
            <MultiValueCheckboxFilter
                label="Где хочет жить:"
                filterName="preferred_place_to_live"
                filteredValues={ArrayUtility.RemoveMultiDuplicates(props.pets, 'preferred_place_to_live')}
                filterPets={props.filterPets} />
        </div>
    );
}

export default CatalogFilters;