import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from './MainPage';
import Catalog from './Catalog';
import NotFound from './NotFound';
import Navigation from './Navigation';
import Login from './Login';
import Footer from './Footer';

const Router = () => (
    <BrowserRouter>
        <Navigation />
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/catalog" component={Catalog} />
            <Route path="/login" component={Login}/>
            <Route component={NotFound} />
        </Switch>
        <Footer />
    </BrowserRouter>
);

export default Router;