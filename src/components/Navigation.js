import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                Veles Home
                <Link to="/catalog" className="navigation-link">Catalog</Link>
            </div>
        );
    }
}

export default Navigation;