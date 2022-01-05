import React from "react";
class FilterTableService extends React.Component {  
  render(){
    return (
    <div class="max-w-sm w-full lg:max-w-full lg:flex">
    <div className = "grid grid-cols-2 grid-rows-4">
      <img class="row-span-3 inline object-cover w-20 h-20 mr-2 rounded-full" src = {this.props.avatar}/>
      <div className = "grid grid-cols-2 grid-rows-1 text-sm"cd >
      <label class="text-gray-900 leading-none">{this.props.nom}</label>
      <label class="text-gray-900 leading-none">{this.props.prenom}</label>
      </div>
      <label class="text-gray-900 leading-none">{this.props.profession}</label>
      <label class="text-gray-600">{this.props.localisation}</label>
    </div>
    </div>);
  }
}
export default FilterTableService;
