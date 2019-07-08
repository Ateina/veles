import React from 'react';

import ColumnTemper from './ColumnTemper';
import ColumnSpecialCharacteristics from './ColumnSpecialCharacteristics';
import ColumnCurrentLocation from './ColumnCurrentLocation';

function ShortInfo(props) {
    return (
        <div className="short-info">
            <ColumnTemper temper={props.temper} />
            <ColumnSpecialCharacteristics sex={props.sex} sterilized={props.sterilized} vaccinated={props.vaccinated} friendly_with={props.friendly_with} />
            <ColumnCurrentLocation status={props.status} />
        </div>
    );
}

export default ShortInfo;