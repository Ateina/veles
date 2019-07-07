import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import ShortInfo from './ShortInfo/ShortInfo';
import './styles.scss'

class PetProfile extends React.Component {
    state = {
        pet: this.props.location.state.pet
    }

    render() {
        const {
            image,
            name,
            sex,
            type,
            desc,
            status,
            temper,
            sterilized,
            vaccinated
        } = this.state.pet;
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
                    <div className="pet-name">{name}</div>
                    <ShortInfo
                        temper={temper}
                        sex={sex}
                        sterilized={sterilized}
                        vaccinated={vaccinated}
                        status={status}
                    />
                    <div className="pet-desc">{desc}</div>
                </div>
            </div>
        );
    }
}

export default PetProfile;