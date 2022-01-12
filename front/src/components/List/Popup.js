import React from "react";
import CardReservation from './Card_reservation'

export default class Popup extends React.Component {
constructor(){
    super();
    this.state = {
        showModal:false,
    }
this.CloseShow = this.CloseShow.bind(this);
this.handleShow = this.handleShow.bind(this);
}

CloseShow(){
    this.setState({showModal:false});
    console.log("Close");
}
handleShow(bol){
    this.setState({showModal:true});
    console.log(this.state.showModal);
}
    render(props){
  return (
    <>
      <button
      className="text-indigo-600 hover:text-indigo-900"
      //  className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={this.handleShow}>
        Prenez RDV
      </button>
      {this.state.showModal ? (
        <>
          <div
            className="text-black justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h5 className="text-xl font-semibold text-black text-center">
                    Reservation
                  </h5>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={this.CloseShow}
                  >
                    <span className="bg-transparent fond-bold opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
               <CardReservation name = { this.props.name} title = {this.props.title} description = {this.props.description}>

               </CardReservation>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={this.CloseShow}
                  >
                    Fermer
                  </button>
                  

                <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
                type="button"
                onClick={this.CloseShow}
                >
                Valider
                </button>       
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

}