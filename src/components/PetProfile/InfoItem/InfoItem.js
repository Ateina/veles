import React from 'react';

function InfoItem(props) {
    return (
        <div className="info-item">
            <div className="label">{props.label}</div>
            <div className="value">{props.value}</div>
        </div>
    );
}

export default InfoItem;