import React from "react";


export default function Navbar() {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6 shadow-md rounded-lg mr-4 ml-4 mt-2">
        {/* Logo navbar */}      
        <div class="flex items-center flex-shrink-0 text-white mr-6">
            <span class="font-semibold text-xl tracking-tight ml-4">Helfen</span>
        </div>    
            
        {/* Liste navbar */}  
            <div class="text-sm lg:flex-grow "> 
                <a  class="block mt-7 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-7 ml-4">
                    Accueil
                </a>
                <a  class="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
                    Mon Compte
                </a>
            </div>
        {/* Connection navbar */}  
            <div>
                <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0 shadow-lg shadow-cyan-200/20">Se connecter</a>
            </div>
        </nav>
    )
}

