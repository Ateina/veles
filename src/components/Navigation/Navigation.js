import React from 'react';
import { Link } from 'react-router-dom'

import './styles.css'

function Navigation() {
    return (
        <nav className="navigation">
            <ol className="navigation-links">
                <li className="navigation-link">
                    <Link to="/">
                        <div className="logo">Veles Home</div>
                    </Link>
                </li>
                <li className="navigation-link">
                    <Link to="/catalog">
                        <div>Catalog</div>
                    </Link>
                </li>
                <li className="navigation-link">
                    <Link to="/login" >
                        <div className="login-link">Login</div>
                    </Link>
                </li>
            </ol>
        </nav>
    );
}

export default Navigation;