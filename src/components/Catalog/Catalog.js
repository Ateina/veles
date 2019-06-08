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
            listOfPets: []
        };
        this.filterPets = this.filterPets.bind(this);
    }

    componentDidMount() {
        this.setState({
            listOfPets: this.state.petsInit,
        });
    }

    filterPets(e) {
        let filteredList = this.state.petsInit;
        if(e.target.name === 'name'){
            filteredList = filteredList.filter(pet => {
                return pet.name.toLowerCase().indexOf(e.target.value) !== -1;
            });
        }
        if(e.target.name === 'type'){
            filteredList = filteredList.filter(pet => {
                return pet.type.toLowerCase() === e.target.value.toLowerCase();
            });
        }
        this.setState({
            listOfPets: filteredList
        });
    }

    render() {
        return (
            <div className="catalog">
                <CatalogFilters filterPets={this.filterPets} filters={this.state.filters}/>
                <PetList pets={this.state.listOfPets}/>
            </div>
        );
    }
}

export default Catalog;