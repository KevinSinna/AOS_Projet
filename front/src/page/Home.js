import React from "react";
import NavBar from '../components/NavBar/Navbar2'
import Cards from '../components/Cards/Cards'
import Foooter from '../components/FooterHome/Footer'
import Popupp from '../components/Popup/popup'
function App() {
  const descr = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.";
  return (
    <div className="min-h-screen bg-white bg-cover bg-center flex flex-col bg-fixed text-dark">
    <NavBar></NavBar>
    <Popupp></Popupp>
          <div className="text-center  font-sans tracking-wide align-middle mt-20">
              <p> 
                  <h1 className="text-5xl">On vous aide !</h1>
                  <div className="text-xl mt-6"> 
                      N'hésitez pas à prendre rendez-vous avec nos nombreux prestataire !
                  </div>
              </p> 
          </div>

      <div>
                  <nav className="flex items-center justify-between flex-wrap bg-blue-700  p-6 shadow-md rounded-lg mr-20 ml-20 mt-20">
                  {/* Logo navbar */}      
                      <div class="flex items-center flex-shrink-0 text-white mr-6">
                          <span class="font-semibold text-xl tracking-tight ml-4">Que recherchez-vous ?</span>
                      </div>    
                      
                  {/* recherche navbar */}  
                      <div class="text-sm lg:flex-grow "> 
                          <input class="placeholder:italic text-black placeholder:text-gray-400 block bg-grey w-full border border-gray-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 mr-3 focus:ring-2 sm:text-sm" placeholder="Prenez un rendez-vous..." type="text" name="search"/>         
                      </div>
                  {/* lancer navbar */}  
                      <div>
                          <button class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-rose-300 hover:bg-white mt-4 lg:mt-0 shadow-lg shadow-cyan-200/20 ml-4">Recherche</button>
                         
                      </div>
                  </nav>

      </div>    
        <div class="flex justify-center space-x-4 mt-2 ml-20 ">
            <div class="flex-1 "><Cards nom = "Sinnadurai" prenom = "Kévin" description ={descr}></Cards></div>
            <div class="flex-1 "><Cards nom = "Hamidi" prenom = "Badr" description ={descr}></Cards></div>
            <div class="flex-1 "><Cards nom = "Bensaid" prenom = "Ahmed" description ={descr}></Cards></div>
        </div>
      <Foooter/>
      </div>
  );}
  export default App;