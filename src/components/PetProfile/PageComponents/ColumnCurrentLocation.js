import React from 'react';

function ColumnCurrentLocation(props) {
    return (
        <div className="column current-place">
            <div className="icon"></div>
            {props.status}
        </div>)
}

export default ColumnCurrentLocation;