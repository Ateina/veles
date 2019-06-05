import React from 'react';
import { NavLink } from 'react-router-dom'

import './styles.css'

function Navigation() {
    return (
        <nav className="navigation">
            <ol className="navigation-links">
                <li className="navigation-link">
                    <NavLink to="/">
                        <div className="logo">Veles Home</div>
                    </NavLink>
                </li>
                <li className="navigation-link">
                    <NavLink to="/catalog">
                        <div>Catalog</div>
                    </NavLink>
                </li>
                <li className="navigation-link">
                    <NavLink to="/login" >
                        <div className="login-link">Login</div>
                    </NavLink>
                </li>
            </ol>
        </nav>
    );
}

export default Navigation;