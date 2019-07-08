import React from 'react';

function VaccinatedProperty(props) {
    if(props.vaccinated){
        const vaccinated = props.sex === 'fem' ? 'Привита' : 'Привит';
        return (
            <li>{vaccinated}</li>
        );
    }
    return null;
}

export default VaccinatedProperty;