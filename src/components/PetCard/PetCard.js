import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.css';

PetCard.propTypes = {
    pet: PropTypes.object
}

function PetCard({ pet }) {
    return (
        <Link to={{
            pathname: `petprofile/${pet.name}`,
            state: { pet }
          }}>
            <div className="pet-card">
                <img src={pet.image ? pet.image[0] : 'images/no-photo.jpg'} alt="pet" />
                <span className="name">{pet.name}</span>
            </div>
        </Link>
    );
}

export default PetCard;