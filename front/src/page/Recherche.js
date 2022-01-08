import React from "react";
import NavBar from '../components/NavBar/Navbar2'
import List from '../components/List/List'
function Recherche() {
  return (
    <div className="min-h-screen bg-pack-train bg-cover bg-center flex flex-col bg-fixed text-white">
    <NavBar></NavBar>
          <div className="text-center  font-sans tracking-wide align-middle mt-20">
              <p> 
                  <h1 className="text-5xl">On vous aide !</h1>
                  <div className="text-xl mt-6"> 
                      N'hésitez pas à prendre rendez-vous avec nos nombreux prestataire 
                  </div>
              </p> 
          </div>  
        <div class="flex justify-center space-x-4 mt-2 ml-20 ">
            <div class="flex-1 "><List></List></div>
    
        </div>
      
      </div>
  );}
  export default Recherche;