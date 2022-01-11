
import React from "react";
import Popup from './Popup'
export default class Ticket extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showPopup: false
    };
    this.handlePops = this.handlePops.bind(this);
  }
  handlePops(){
    console.log("pops")
    return(<Popup></Popup>
    )
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
render(props){
return(
  <tr key={this.props.email}>
  <td className="px-6 py-4 whitespace-nowrap">
    <div className="flex items-center">
      <div className="flex-shrink-0 h-10 w-10">
        <img className="h-10 w-10 rounded-full" src={this.props.image} alt="" />
      </div>
      <div className="ml-4">
        <div className="text-sm font-medium text-gray-900">{this.props.name}</div>
        <div className="text-sm text-gray-500">{this.props.email}</div>
      </div>
    </div>
  </td>
  <td className="px-6 py-4 whitespace-nowrap">
    <div className="text-sm text-gray-900">{this.props.title}</div>
    <div className="text-sm text-gray-500">{this.props.department}</div>
  </td>
  <td className="px-6 py-4 whitespace-nowrap">
    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
      Active
    </span>
  </td>
  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{this.props.role}</td>
  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
    <button onClick={this.handlePops} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
      Prenez RDV
    </button>
  </td>
</tr>
)
}

}