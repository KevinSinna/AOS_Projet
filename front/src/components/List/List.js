/* This example requires Tailwind CSS v2.0+ */
import React from "react"
import image from "../../assets/img/persotest.png"
import Prestationencours from "../Profil/Prestationencours";
import Ticket from "./Ticket";
const ServiceAPI = 'http://localhost:7000/Services';
const PrestataireAPI = 'http://localhost:5000/prestataires/';
const SearchAPI = 'http://localhost:7000/Services/recherche/';
export default class List extends React.Component {

  constructor(props){
    super(props);   
    this.state={
      people:[],
      search : false
    }
    this.search = this.search.bind(this);
    this.init = this.init.bind(this);
  }
  async componentDidMount() {
    this.init();
  }
  async init() {
    this.setState({ people:[]});
      // GET request using fetch with async/await
      const response = await fetch(ServiceAPI);
      const data = await response.json();
    const datap = await data.map(async (service) => {
         const response = await fetch(PrestataireAPI +service.PrestataireID);
         if (!response.ok) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
      }
         const prestataire = await response.json();
         return ({name: prestataire.nom + ' '+ prestataire.prenom,
         title: service.Service,
         department: prestataire.adresse.ville,
         role: 'Préstataire',
         email: prestataire.email,
         image:
         '../../assets/img/persotest.png'
         })
       })
       datap.map((dat)=>{
        dat.then(value => { this.setState({ people: [...this.state.people , value] })});
       })
  }
   
async search(){

 // GET request using fetch with async/await
 const profession =  document.getElementById("search").value;
 if(profession !=""){
 this.setState({people:[]});
 const response = await fetch(SearchAPI + profession);
 const data = await response.json();
const datap = await data.map(async (service) => {
    const response = await fetch(PrestataireAPI +service.PrestataireID);
    if (!response.ok) {
     // get error message from body or default to response statusText
     const error = (data && data.message) || response.statusText;
     return Promise.reject(error);
 }
    const prestataire = await response.json();
    return ({name: prestataire.nom + ' '+ prestataire.prenom,
    title: service.Service,
    department: prestataire.adresse.ville,
    role: 'Préstataire',
    email: prestataire.email,
    image:
    '../../assets/img/persotest.png'
    })
  })

 console.warn(datap);
 datap.map((dat)=>{
  dat.then(value => { this.setState({ people: [...this.state.people , value] })});
 })
}else{
  this.init();
}
}

  componentWillUnmount() {  }


  render(props){
  return (
    
    <div className="flex flex-col mr-10">
      <div>
                  <nav className="flex items-center justify-between flex-wrap bg-pink-300 bg-opacity-10  p-6 shadow-md rounded-lg mr-20 ml-20 mt-20">
                  {/* Logo navbar */}      
                      <div class="flex items-center flex-shrink-0 text-white mr-6">
                          <span class="font-semibold text-xl tracking-tight ml-4">Que recherchez-vous ?</span>
                      </div>    
                      
                  {/* recherche navbar */}  
                      <div class="text-sm lg:flex-grow "> 
                          <input id ='search' class="placeholder:italic text-black placeholder:text-gray-400 block bg-grey w-full border border-gray-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 mr-3 focus:ring-2 sm:text-sm" placeholder="Prenez un rendez-vous..." type="text" name="search"/>         
                      </div>
                  {/* lancer navbar */}  
                      <div>
                          <button onClick = {this.search} class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-rose-300 hover:bg-white mt-4 lg:mt-0 shadow-lg shadow-cyan-200/20 ml-4">Recherche</button>
                         
                      </div>
                  </nav>

      </div>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Préstataire
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Profession
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Role
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {this.state.people.map((person) => (
                  <Ticket email = {person.email} name ={person.name} title = {person.title} department = {person.department} role ={person.role} image={person.image}></Ticket>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
 }
}