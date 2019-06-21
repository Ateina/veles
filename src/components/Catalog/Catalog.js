import React, { Component } from 'react';

import PetList from '../PetList/PetList';
import CatalogFilters from '../CatalogFilters/CatalogFilters';
import pets from '../../data/pets';
import './styles.css';

class Catalog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            petsInit: pets,
            listOfPets: [],
            filters: []
        };
        this.filterPets = this.filterPets.bind(this);
    }

    componentDidMount() {
        this.setState({
            listOfPets: this.state.petsInit,
        });
    }

    setFilterState(e) {
        const filterType = e.target.type;
        const filterName = e.target.name;
        const filterValue = e.target.value;
        const currentFiltersList = this.state.filters;
        currentFiltersList.push(
            {
                type: filterType,
                name: filterName,
                value: filterValue
            });
        this.setState({
            filters: currentFiltersList
        });
    }

    applyFilters() {
        const filters = this.state.filters;
        let filteredList = this.state.petsInit;
        filters.forEach(filter => {
            if (filter.type === 'text') {
                filteredList = filteredList.filter(pet => {
                    return pet[filter.name].toLowerCase().indexOf(filter.value) !== -1;
                });
            }
            if (filter.type === 'checkbox') {
                filteredList = filteredList.filter(pet => {
                    if (pet[filter.name]) {
                        return pet[filter.name].toLowerCase() === filter.value.toLowerCase();
                    }
                    return null;
                });
            }
        });
        return filteredList;
    }

    filterPets(e) {
        this.setFilterState(e);
        const filteredList = this.applyFilters();
        this.setState({
            listOfPets: filteredList
        });
    }

    render() {
        return (
            <div className="catalog">
                <CatalogFilters
                    pets={this.state.petsInit}
                    filterPets={this.filterPets} />
                <PetList
                    pets={this.state.listOfPets} />
            </div>
        );
    }
}

export default Catalog;