import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from './MainPage/MainPage';
import Catalog from './Catalog/Catalog';
import NotFound from './NotFound/NotFound';
import Navigation from './Navigation/Navigation';
import Login from './Login/Login';
import Footer from './Footer/Footer';
import PetProfile from './PetProfile/PetProfile';

const App = () => (
    <BrowserRouter>
        <Navigation />
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/catalog" component={Catalog} />
            <Route path="/login" component={Login}/>
            <Route path="/petprofile/:petId" component={PetProfile} />
            <Route component={NotFound} />
        </Switch>
        <Footer />
    </BrowserRouter>
);

export default App;