import React from 'react';
import { Route } from "react-router-dom";

import MainPage from '../MainPage/MainPage';
import PetCard from '../PetCard/PetCard';
import './styles.css';

function PetList(props) {
    return (
        <div className="list-of-pets">
            {Object.keys(props.pets).map(key => (
                <PetCard
                    key={key}
                    index={key}
                    pet={props.pets[key]}
                />
            ))}
            <Route path="/catalog/:petId" component={MainPage} />
        </div>
    );
}

export default PetList;