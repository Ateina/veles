import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from './MainPage/MainPage';
import Catalog from './Catalog/Catalog';
import NotFound from './NotFound';
import Navigation from './Navigation/Navigation';
import Login from './Login/Login';
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