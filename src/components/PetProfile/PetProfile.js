import React from 'react';

import InfoItem from './InfoItem/InfoItem';
import './styles.css'

class PetProfile extends React.Component {
    state = {
        pet: this.props.location.state.pet
    }

    render() {
        const { image, name, type, desc, status } = this.state.pet;
        return (
            <div className="pet-profile">
                <div className="pet-images">
                    <img src={image} alt="pet" />
                </div>
                <div className="pet-info">
                    <InfoItem label="Кличка" value={name} />
                    <InfoItem label="Тип" value={type} />
                    <InfoItem label="Кто я" value={desc} />
                    <InfoItem label="Где я" value={status} />
                </div>
            </div>
        );
    }
}

export default PetProfile;