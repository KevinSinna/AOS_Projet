import React from "react";
import "./Input_bar.css";

 export default function Input_bar(props) {
  return (
<div class="container_i">
<p class="title_i">{props.title}</p>
<input class = "input_marg" type={props.type} id={props.id} name={props.name} required
  minlength={props.min} maxlength={props.max} size={props.size} placeholder = {props.placeholder}/>
</div>
  );
}
