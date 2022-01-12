import React from 'react';
export default class Card_reservation extends React.Component{



  render(props){
    return(

      <form action="" method="post">
      <div class="md:flex items-center mt-8">

              <div class="md:flex items-center mt-8">

          </div>    
          </div>
          <div class="md:flex items-center mt-12">
              <div class="w-full md:w-1/2 flex flex-col">
                  <label class="font-semibold leading-none">Nom </label>
                  <input type="text" class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
              </div>
              <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                  <label class="font-semibold leading-none">Prenom</label>
                  <input type="email" class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"/>
              </div>
          </div>


          
          <div>
              <div class="w-full flex flex-col mt-8">
                  <label class="font-semibold leading-none">Description de la demande</label>
                  <textarea id="Heure de debut" type="text" class="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"></textarea>
              </div>
          </div>
          <div className="mt-8 font-semibold leading-none">
            Heure de début
          <label class="text-gray-700" for="time">
          <input id="Heure de fin" type="time" class="appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent flex-1"/>
          </label>     
          
          </div>
          <div className="mt-8 font-semibold leading-none">
          Heure de fin
          <label class="text-gray-700" for="time">
          <input type="time" class="appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent flex-1"/>
          </label>     
          
          </div>
                      <div class="flex items-center justify-center w-full">
              <button class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                  Prendre rendez vous
              </button>
          </div>
      </form>
    )


  }
}