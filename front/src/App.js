
import './App.css';
import React from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";
import FilterTableService from './components/Service/FilterTableService';
import Home from './page/Home'
import Result from './page/Result'
//import NotFound from './pages/NotFound';
function App() {
  return (
  <BrowserRouter>
    <Switch>
      <Route path= "/" exact component={Home}/>
      <Route path="/result" exact component={Result}/>
    </Switch>
  </BrowserRouter>
  )}
export default App;
