import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

PetCard.propTypes = {
    pet: PropTypes.object
}

function PetCard({pet}) {
    return (
        <div className="pet-card">
            <img src={pet.image ? pet.image : 'images/no-photo.jpg'} alt="pet"/>
            <span className="name">{pet.name}</span>
        </div>
    );
}

export default PetCard;