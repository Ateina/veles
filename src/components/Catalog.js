import React, { Component } from 'react';
import PetCard from './PetCard';
import pets from '../data/pets';

class Catalog extends Component {
    render() {
        return (
            <div className="catalog">
                <div className="list-of-pets">
                    {Object.keys(pets).map(key => (
                        <PetCard
                            key={key}
                            index={key}
                            pet={pets[key]}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Catalog;