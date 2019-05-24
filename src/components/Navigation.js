import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                Navigation
                <Link to="/catalog" className="catalog-button">Catalog</Link>
            </div>
        );
    }
}

export default Navigation;