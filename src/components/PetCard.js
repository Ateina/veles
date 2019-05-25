import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PetCard extends Component {
    static propTypes = {
        pet: PropTypes.object
    }

    render() { 
        return (
            <div className="pet-card">
                Name: {this.props.pet.name}
            </div>
        );
    }
}


 
export default PetCard;