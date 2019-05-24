import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from './MainPage';
import Catalog from './Catalog';
import NotFound from './NotFound';
import Navigation from './Navigation'

const Router = () => (
    <BrowserRouter>
        <Navigation />
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/catalog" component={Catalog} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;