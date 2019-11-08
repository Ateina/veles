import React from 'react';

function ColumnCurrentLocation(props) {
    return (
        <div className="column current-place">
            <div className="icon"></div>
            <div className="location">{props.status}</div>
        </div>)
}

export default ColumnCurrentLocation;