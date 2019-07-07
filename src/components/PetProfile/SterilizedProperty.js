import React from 'react';

function SterilizedProperty(props) {
    if(props.sterilized){
        const sterilized = props.sex === 'fem' ? 'Стерилизована' : 'Кастрирован';
        return (
            <li>{sterilized}</li>
        );
    }
    return null;
}

export default SterilizedProperty;