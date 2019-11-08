import React from 'react';

import PetCard from '../PetCard/PetCard';
import './styles.css';

function PetList(props) {
    return (
        <div className="list-of-pets">
            {
                !props.pets.length &&
                (
                    <div className="no-results">
                        No results
                    </div>
                )
            }
            {
                !!props.pets.length &&
                Object.keys(props.pets).map(key => (
                    <PetCard
                        key={key}
                        index={key}
                        pet={props.pets[key]}
                    />
                ))}
        </div>
    );
}

export default PetList;