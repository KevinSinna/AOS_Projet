
import './App.css';
import React from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './page/Home'
import Result from './page/Result'
import Connexion from './page/Connexion'
import Inscription from './page/Inscription'
//import NotFound from './pages/NotFound';
function App() {
  return (
  <BrowserRouter>
    <Switch>
    <Route path= "/" exact component={Home}/>
      <Route path= "/home" exact component={Home}/>
      <Route path="/result" exact component={Result}/>
      <Route path= "/connexion" exact component={Connexion}/>
      <Route path= "/inscription" exact component={Inscription}/>
    </Switch>
  </BrowserRouter>
  )}
export default App;
