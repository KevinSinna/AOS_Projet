import React from "react";
import NavBar from '../components/NavBar/Navbar2'
import List from '../components/List/List'
function Recherche() {
    const people = [
        {
          name: 'Badr Cooper',
          title: 'Technicien',
          department: 'Villepinte',
          role: 'Admin',
          email: 'test@example.com',
          image:
          '../../assets/img/persotest.png',
        },
        {
            name: 'Badr Cooper',
            title: 'Technicien',
            department: 'Villepinte',
            role: 'Admin',
            email: 'test@example.com',
            image:
            '../../assets/img/persotest.png',
          }
        // More people...
      ]
  return (
    <div className="min-h-screen bg-pack-train bg-cover bg-center flex flex-col bg-fixed text-white">
    <NavBar></NavBar>
          <div className="text-center  font-sans tracking-wide align-middle mt-20">
              <p> 
                  <h1 className="text-5xl">On vous aide ! {people.name}</h1>
                  <div className="text-xl mt-6"> 
                      N'hésitez pas à prendre rendez-vous avec nos nombreux prestataire 
                  </div>
              </p> 
          </div>

      <div>
                  <nav className="flex items-center justify-between flex-wrap bg-pink-300 bg-opacity-10  p-6 shadow-md rounded-lg mr-20 ml-20 mt-20">
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
                          <button class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-rose-300 hover:bg-white mt-4 lg:mt-0 shadow-lg shadow-cyan-200/20 ml-4" onClick = "search">Recherche</button>
                         
                      </div>
                  </nav>

      </div>    
      <div class="min-h-screen">
  <p class="text-center text-4xl font-semibold py-4">RECHERCHE</p>
  <div class="p-4 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 select-none">
    <div class="w-full cursor-pointer rounded-md shadow-md shadow-gray-200 hover:shadow-blue-400/80 hover:shadow-2xl hover:bg-gray-50">
      <img class="aspect-video bg-cover w-full rounded-t-md min-h-40" src="https://laravelnews.imgix.net/images/tailwindcss.png?ixlib=php-3.3.1" />
      <div class="p-4">
        <span class="text-blue-600 font-normal text-base">Serrurier</span>
        <p class="font-semibold text-xl py-2">Lock my door</p>
        <p class="font-light text-white-700 text-justify line-clamp-3">The longest word in any of the major English language dictionaries, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.</p>
        <div class="flex flex-wrap mt-10 space-x-4 align-bottom">
          <img class="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAPdvF3u9YGCmWQZDGug3Jy2Eqrb4XuoOQbjozL6ObMiSl_2AvFQGSdpuqNPgADM37GJQ&usqp=CAU" />
          <div class="flex flex-col space-y-0">
            <p class="font-semibold text-base">Gianfranco Bensaid</p>
            <p class="font-light text-sm">31/12/2021</p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full cursor-pointer rounded-md shadow-md shadow-gray-200 hover:shadow-blue-400/80 hover:shadow-2xl hover:bg-gray-50">
      <img class="aspect-video bg-cover w-full rounded-t-md min-h-40" src="https://laravelnews.imgix.net/images/tailwindcss.png?ixlib=php-3.3.1" />
      <div class="p-4">
        <span class="text-blue-600 font-normal text-base">News</span>
        <p class="font-semibold text-xl py-2">Tailwind Card Blog</p>
        <p class="font-light text-white-700 text-justify line-clamp-3">The longest word in any of the major English language dictionaries, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.</p>
        <div class="flex flex-wrap mt-10 space-x-4 align-bottom">
          <img class="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAPdvF3u9YGCmWQZDGug3Jy2Eqrb4XuoOQbjozL6ObMiSl_2AvFQGSdpuqNPgADM37GJQ&usqp=CAU" />
          <div class="flex flex-col space-y-0">
            <p class="font-semibold text-base">@djpfs (Github)</p>
            <p class="font-light text-sm">20 de Dezembro de 2021</p>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full cursor-pointer rounded-md shadow-md shadow-gray-200 hover:shadow-blue-400/80 hover:shadow-2xl hover:bg-gray-50">
      <img class="aspect-video bg-cover w-full rounded-t-md min-h-40" src="https://laravelnews.imgix.net/images/tailwindcss.png?ixlib=php-3.3.1" />
      <div class="p-4">
        <span class="text-blue-600 font-normal text-base">News</span>
        <p class="font-semibold text-xl py-2">Tailwind Card Blog</p>
        <p class="font-light text-white-700 text-justify line-clamp-3">The longest word in any of the major English language dictionaries, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.</p>
        <div class="flex flex-wrap mt-10 space-x-4 align-bottom">
          <img class="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAPdvF3u9YGCmWQZDGug3Jy2Eqrb4XuoOQbjozL6ObMiSl_2AvFQGSdpuqNPgADM37GJQ&usqp=CAU" />
          <div class="flex flex-col space-y-0">
            <p class="font-semibold text-base">@djpfs (Github)</p>
            <p class="font-light text-sm">20 de Dezembro de 2021</p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full cursor-pointer rounded-md shadow-md shadow-gray-200 hover:shadow-blue-400/80 hover:shadow-2xl hover:bg-gray-50">
      <img class="aspect-video bg-cover w-full rounded-t-md min-h-40" src="https://laravelnews.imgix.net/images/tailwindcss.png?ixlib=php-3.3.1" />
      <div class="p-4">
        <span class="text-blue-600 font-normal text-base">Plombier</span>
        <p class="font-semibold text-xl py-2">Plomb & co</p>
        <p class="font-light text-white-700 text-justify line-clamp-3">The longest word in any of the major English language dictionaries, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.</p>
        <div class="flex flex-wrap mt-10 space-x-4 align-bottom">
          <img class="w-10 h-10 rounded-full" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.pngtree.com%2Ffreepng%2Fcartoon-minimalistic-black-magnifying-glass-icon_5454546.html&psig=AOvVaw3LmAUcAoUOXdVrE3PwCmwg&ust=1641651232138000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCICjy8bpn_UCFQAAAAAdAAAAABAD" />
          <div class="flex flex-col space-y-0">
            <p class="font-semibold text-base"></p>
            <p class="font-light text-sm">20 de Dezembro de 2021</p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full cursor-pointer rounded-md shadow-md shadow-gray-200 hover:shadow-blue-400/80 hover:shadow-2xl hover:bg-gray-50">
      <img class="aspect-video bg-cover w-full rounded-t-md min-h-40" src="https://laravelnews.imgix.net/images/tailwindcss.png?ixlib=php-3.3.1" />
      <div class="p-4">
        <span class="text-blue-600 font-normal text-base">News</span>
        <p class="font-semibold text-xl py-2">Tailwind Card Blog</p>
        <p class="font-light text-white-700 text-justify line-clamp-3">The longest word in any of the major English language dictionaries, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.</p>
        <div class="flex flex-wrap mt-10 space-x-4 align-bottom">
          <img class="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAPdvF3u9YGCmWQZDGug3Jy2Eqrb4XuoOQbjozL6ObMiSl_2AvFQGSdpuqNPgADM37GJQ&usqp=CAU" />
          <div class="flex flex-col space-y-0">
            <p class="font-semibold text-base">@djpfs (Github)</p>
            <p class="font-light text-sm">20 de Dezembro de 2021</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      
      </div>
  );}
  export default Recherche;