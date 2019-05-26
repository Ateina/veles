import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PetCard extends Component {
    static propTypes = {
        pet: PropTypes.object
    }

    render() {
        return (
            <div className="pet-card">
                <img src={this.props.pet.image ? this.props.pet.image : 'images/no-photo.jpg'} alt="pet"/>
                <span className="name">{this.props.pet.name}</span>
            </div>
        );
    }
}



export default PetCard;