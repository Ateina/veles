import React from 'react';

import { InputFilter, CheckBoxFilter, MultiValueCheckboxFilter } from '../Filters/Filters';
import MainFilters from './MainFilters';
import AdditionalFilters from './AdditionalFilters';
import ToggleFiltersButton from './ToggleFiltersButton';

import { ArrayUtility } from '../../utilities/utilities';
import './styles.css';

class CatalogFilters extends React.Component {
    state = {
        showFilters:false
    }

    toggleButton() {
        this.setState = {
            showFilters: !this.state.showFilters
        }
    }

    render() {
        return (
            <div className="filters-pets">
                <MainFilters>
                    <InputFilter
                        name="name"
                        placeholder="Search by name"
                        filterPets={this.props.filterPets} />
                    <CheckBoxFilter
                        label="Тип"
                        filterName="type"
                        filteredValues={ArrayUtility.RemoveDuplicates(this.props.pets, 'type')}
                        filterPets={this.props.filterPets} />
                    <CheckBoxFilter
                        label="Пол"
                        filterName="sex"
                        filteredValues={ArrayUtility.RemoveDuplicates(this.props.pets, 'sex')}
                        filterPets={this.props.filterPets} />
                </MainFilters>
                <AdditionalFilters >
                    <CheckBoxFilter
                        label="Где находится животное"
                        filterName="status"
                        filteredValues={ArrayUtility.RemoveDuplicates(this.props.pets, 'status')}
                        filterPets={this.props.filterPets} />
                    <MultiValueCheckboxFilter
                        label="Хорошо ладит с:"
                        filterName="friendly_with"
                        filteredValues={ArrayUtility.RemoveMultiDuplicates(this.props.pets, 'friendly_with')}
                        filterPets={this.props.filterPets} />
                    <MultiValueCheckboxFilter
                        label="Где хочет жить:"
                        filterName="preferred_place_to_live"
                        filteredValues={ArrayUtility.RemoveMultiDuplicates(this.props.pets, 'preferred_place_to_live')}
                        filterPets={this.props.filterPets} />
                </AdditionalFilters>
                <ToggleFiltersButton onClick={this.toggleFilters} />
            </div>
        );
    }
}

export default CatalogFilters;
