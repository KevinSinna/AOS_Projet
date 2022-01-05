import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import FilterTableService from '../components/Service/FilterTableService';
import Connexion from '../components/Connexion/Connexion';
import NavBar from '../components/NavBar/Navbar2';
function App() {
  return (
    <div class="overflow-hidden">
    <><NavBar></NavBar><Connexion></Connexion></></div>
      );}
  export default App;