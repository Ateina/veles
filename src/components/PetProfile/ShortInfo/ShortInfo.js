import React from 'react';

import SterilizedProperty from '../SterilizedProperty';
import VaccinatedProperty from '../VaccinatedProperty';

function ShortInfo(props) {
    return (
        <div className="short-info">
            <div className="column temper">
            <div className="icon"></div>
                <ul>
                    {Object.keys(props.temper).map(key => (
                        <li
                            key={key}
                            index={key}
                        >
                            {props.temper[key]}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="column special-characteristics">
            <div className="icon"></div>
                <ul>
                    <SterilizedProperty sex={props.sex} sterilized={props.sterilized} />
                    <VaccinatedProperty sex={props.sex} vaccinated={props.vaccinated} />
                    <li>Хорошо ладит с {props.friendly_with}</li>
                </ul>
            </div>
            <div className="column current-place">
            <div className="icon"></div>
                {props.status}
            </div>
        </div>
    );
}

export default ShortInfo;