import React from 'react';
import { NavLink } from 'react-router-dom'

import './styles.scss'

function Navigation() {
    return (
       
        <React.Fragment>
            <input type="checkbox" id="nav-toggle" hidden></input>
        

            <nav className="navigation">

                <label htmlFor="nav-toggle" className="nav-toggle" onСlick>
                </label>

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
        </React.Fragment>
    );
}

export default Navigation;