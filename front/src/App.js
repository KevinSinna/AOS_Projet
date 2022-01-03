import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu/Menu.js'
import React from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './page/Home'
import Result from './page/Result'
import Connexion from './page/Connexion'
import Inscription from './page/Inscription'
import ProfilClient from './page/ProfilClient';
function App() {
  return (
  <BrowserRouter>
    <Switch>
      <Route path= "/" exact component={Home}/>
      <Route path="/result" exact component={Result}/>
      <Route path= "/connexion" exact component={Connexion}/>
      <Route path= "/inscription" exact component={Inscription}/>
      <Route path= "/moncompte" exact component={ProfilClient}/>
    </Switch>
  </BrowserRouter>
  )}
export default App;
