import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.scss';

PetCard.propTypes = {
    pet: PropTypes.object
}

function PetCard({ pet }) {
    return (
        <div className="pet-card">
            <Link to={{
                pathname: `petprofile/${pet.name}`,
                state: { pet }
            }}>
                <img src={pet.image ? pet.image[0] : 'images/no-photo.jpg'} alt="pet" />
                <div className="pet-short-info">{pet.name}</div>
            </Link>
        </div>
    );
}

export default PetCard;