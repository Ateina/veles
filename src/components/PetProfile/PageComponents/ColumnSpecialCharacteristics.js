import React from 'react';

import SterilizedProperty from './SterilizedProperty';
import VaccinatedProperty from './VaccinatedProperty';

function ColumnSpecialCharacteristics(props) {
    return (<div className="column special-characteristics">
        <div className="icon"></div>
        <ul>
            <SterilizedProperty sex={props.sex} sterilized={props.sterilized} />
            <VaccinatedProperty sex={props.sex} vaccinated={props.vaccinated} />
            <li>Хорошо ладит с {props.friendly_with}</li>
        </ul>
    </div>)
}

export default ColumnSpecialCharacteristics;