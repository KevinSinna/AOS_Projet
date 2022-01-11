
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
import reservation from './page/MonCompte/Reservations'
import ProfilClient from './page/MonCompte/ProfilClient';
import Mesreservation from './components/Profil/Mes Reservations';
import moncompte from './page/MonCompte/Moncompte'
import InfoClient from './components/Profil/InfoClient';
import Agenda from './page/MonCompte/Agenda';
import ProfilPresta from './page/MonCompte/ProfilPrestataire';
import rdv from './page/NouveauTicket';


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
      <Route path= "/monprofil" exact component={InfoClient}/>
      <Route path= "/faq" exact component={Faq}/>
      <Route path= "/reservation" exact component={reservation}/>
      <Route path= "/moncompte" exact component={moncompte}/>
      <Route path= "/agenda" exact component={Agenda}/>
      <Route path= "/profil-prestataire" exact component={ProfilPresta}/>
      <Route path= "/rdv" exact component={rdv}/>
    </Switch>
  </BrowserRouter>
  )}
export default App;