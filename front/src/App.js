import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu/Menu.js'
import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import FilterTableService from './components/Service/FilterTableService';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const Category = () => (
  <div>
    <h2>Category</h2>
  </div>
);

const Products = () => (
  <div>
    <h2>Products</h2>
  </div>
);
function App() {
  return (
    <FilterTableService avatar="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg" nom = "Kev" prenom = "N" profession = "bg" localisation ="Evry"></FilterTableService>
  );
}

export default App;
/*<div>
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>

      { /* Route components are rendered if the path prop matches the current URL */
     /* <Route path="/"><Home /></Route>
      <Route path="/category"><Category /></Route>
      <Route path="/products"><Products /></Route>
    </div>*/