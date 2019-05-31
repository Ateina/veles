import React from 'react';

import './styles.css';

function CatalogFilters(props) {
    return (
        <div className="filters-pets">
            <input
                type="text"
                className="filter"
                placeholder="Search for name"
                onChange={props.filterPets}
            />
        </div>
    );
}

export default CatalogFilters;