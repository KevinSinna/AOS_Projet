
import './App.css';
import React from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './page/Home'
import Result from './page/Result'
import Connexion from './page/Connexion'
import Inscription from './page/Inscription'
import Recherche from './page/Recherche'
import Faq from './page/Faq'
//import NotFound from './pages/NotFound';
import ProfilClient from './page/MonCompte/ProfilClient';
import Reservation from './page/MonCompte/Reservations';
function App() {
  return (
  <BrowserRouter>
    <Switch>
    <Route path= "/" exact component={Home}/>
      <Route path= "/home" exact component={Home}/>
      <Route path="/result" exact component={Result}/>
      <Route path= "/connexion" exact component={Connexion}/>
      <Route path= "/inscription" exact component={Inscription}/>
      <Route path= "/recherche" exact component={Recherche}/>
      <Route path= "/moncompte" exact component={ProfilClient}/>
      <Route path= "/faq" exact component={Faq}/>
      <Route path= "/reservation" exact component={Reservation}/>
    </Switch>
  </BrowserRouter>
  )}
export default App;
