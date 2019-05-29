import React from 'react';

import PetCard from '../PetCard';
import pets from '../../data/pets';
import './styles.css';

function Catalog() {
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

export default Catalog;