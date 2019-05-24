import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                <Link to="/" className="navigation-link">
                    <div className="logo">Veles Home</div>
                </Link>
                <Link to="/catalog" className="navigation-link">
                    <div>Catalog</div>
                </Link>
            </div>
        );
    }
}

export default Navigation;