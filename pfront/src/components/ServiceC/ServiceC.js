
import React from "react";

export default class Ser extends React.Component{
  constructor(props){
    super(props);
    this.registrer = this.registrer.bind(this);
  }
  async registrer()
  { const items = {
    Service : document.getElementById("Service").value,
    prenom : document.getElementById("prenom").value,
    adresse : document.getElementById("adresse").value,
    adresse_mail : document.getElementById("email").value,
    code_postal :document.getElementById("code_Postale").value
  }
  let result = await fetch('http://localhost:4000/clients',{
  method : 'POST',
  body:JSON.stringify(items),
  headers:{
    "Content-Type":"application/json",
    "Accept":"application/json"
  }
});
  result = await result.json();
  console.log(result);
 }
  render(){
  return (
    <>
      <div className="  flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className=" space-y-8">
          <div>
            <h2 className="mt-1 text-center text-3xl font-extrabold text-black">Devenez un prestataire Helfen</h2>
            <p className="mt-2 text-center text-sm text-black">
              Ajoutez votre service
              
            </p>
          </div>
          <form className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">


            
            <div class=" relative ">
                <label for="name-with-label" class="text-gray-700">
                    Service
                </label>
                <input type="text" id="Service" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="Service" placeholder="Nom service"/>
            </div>
            <br/>
            <div class=" relative ">
                <label for="name-with-label" class="text-gray-700">
                    Description
                </label>
                <textarea class="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="Description" placeholder="Entrer votre description" name="Description" rows="5" cols="40">
                </textarea>           
            </div>
            <br/>


            <div date-rangepicker="" class="flex items-center">
<div class="relative">
<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
<svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
</div>
<input name="start" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input" placeholder="Select date start"/>
</div>
<span class="mx-4 text-gray-500">to</span>
<div class="relative">
<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
<svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
</div>
<input name="end" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input" placeholder="Select date end"/>
</div>
</div>

            <br/>
            <div class=" relative ">
                <label for="name-with-label" class="text-gray-700">
                    Statut
                </label>
                <select id="Status" class="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="Status">
                    <option value="Active">
                        Active
                    </option>
                    <option value="Non Active">
                        Non Active
                    </option>
                </select>      
            </div>






            </div>
           
           

            <div>
              <button onClick={this.registrer}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  
                </span>
                S'inscrire
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
  }
}