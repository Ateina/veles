import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import InfoItem from './InfoItem/InfoItem';
import './styles.css'

class PetProfile extends React.Component {
    state = {
        pet: this.props.location.state.pet
    }

    render() {
        const { image, name, type, desc, status } = this.state.pet;
        const images = [];
        image.forEach(img => {
            images.push({
                original: img
            })
        })
        return (
            <div className="pet-profile">
                <div className="pet-images">
                    <ImageGallery
                        items={images}
                        showPlayButton={false}
                        showFullscreenButton={false}
                        showThumbnails={false}
                        showBullets={true}
                    />
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