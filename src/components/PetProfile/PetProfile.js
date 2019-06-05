import React from 'react';

import './styles.css'

class PetProfile extends React.Component {
    state = {
        pet: this.props.location.state.pet
    }

    render() {
        const {image, name, type, desc, status} = this.state.pet;
        return (
            <div className="pet-profile">
                <div className="pet-images">
                    <img src={image} alt=""/>
                </div>
                <div className="pet-info">
                    <div className="info-item">
                        <div className="label">Кличка</div>
                        <div className="value">{name}</div>
                    </div>
                    <div className="info-item">
                        <div className="label">Тип</div>
                        <div className="value">{type}</div>
                    </div>
                    <div className="info-item">
                        <div className="label">Кто я</div>
                        <div className="value">{desc}</div>
                    </div>
                    <div className="info-item">
                        <div className="label">Где я</div>
                        <div className="value">{status}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PetProfile;