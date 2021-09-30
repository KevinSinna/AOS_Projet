import React from "react";
import "./Menu.css";
import Input_bar from './Input_bar'

 export default function Menu(props) {
  return (
<div class="topnav" id="myTopnav">
  <h1>HELFEN</h1>
  <div class = "input_bar">
  <Input_bar title="Métier" type="text" max="8" min="4" size="10" id="Profession" name="profession" placeholder="Profession"></Input_bar>
  <input class = "input_marg" type="text" id="loc  localisation" name="Localisation" required
  minlength="4" maxlength="8" size="10" placeholder = "Où ?"/>
  <input class = "input_marg" type="Date" id="date" name="Date" required
  minlength="4" maxlength="8" size="10" placeholder = "QUand ?"/>
  <button>Recherche</button>
  </div>

</div>
  );
}

