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
        const filterChecked = e.target.checked;
        let currentFiltersList = this.state.filters;
        const currentFilter = currentFiltersList.find(item => item.name === filterName);
        if(!filterChecked && filterType === 'checkbox'){
            currentFilter.values = currentFilter.values.filter(value => value !== filterValue)
        }
        else{
            if(!currentFilter){
                currentFiltersList.push(
                    {
                        type: filterType,
                        name: filterName,
                        value: filterValue,
                        values: [filterValue],
                        checked: filterChecked
                    });
            }
            else{
                currentFilter.values.push(filterValue);
            }
        }

        this.setState({
            filters: currentFiltersList
        });
        return currentFiltersList;
    }

    applyFilters(currentFiltersList) {
        // const filters = this.state.filters;
        const filters = currentFiltersList;
        let filteredList = this.state.petsInit;
        filters.forEach(filter => {
            if (filter.type === 'text') {
                filteredList = filteredList.filter(pet => {
                    return pet[filter.name].toLowerCase().indexOf(filter.value) !== -1;
                });
            }
            if (filter.type === 'checkbox') {
                if(filter.values.length){
                    filteredList = filteredList.filter(pet => {
                        if (pet[filter.name]) {
                            return filter.values.some(value => value.toLowerCase() === pet[filter.name].toLowerCase())
                        }
                        return null;
                    });
                }
            }
        });
        return filteredList;
    }

    filterPets(e) {
        const currentFiltersList = this.setFilterState(e);
        const filteredList = this.applyFilters(currentFiltersList);
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