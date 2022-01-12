import React from 'react';
export default class Card_reservation extends React.Component{



  render(props){
    return(
<>
  <div class="flex flex-col items-center pb-10">
			<img class="mb-3 w-24 h-24 rounded-full shadow-lg" src=""/>
			<h3 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{this.props.name}</h3>
			<span class="text-sm text-gray-500 dark:text-gray-400">{this.props.title}</span>
			<div class="flex mt-4 space-x-3 lg:mt-6">
        <div class = "flex-col">
	
      <p class = "front-bold">Description : {this.props.description}</p>
      
      <form>
      <div>
                <label htmlFor="Code Postale" className="sr-only">
                  Adresse
                </label>
                <input
                  id="Adresse"
                  name="Adresse"
                  type="Adresse"
                  autoComplete="Adresse"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Adresse"
                />
              </div>
              <div>
                <label htmlFor="Nom" className="sr-only">
                  Date de début
                </label>
                <select name="date" id="date-select" class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
    <option >--Please choose an option--</option>
    <option >27/01/2021</option>
    <option >28/01/2021</option>
    <option>15/01/2021</option>
    <option >14/01/2021</option>
    <option >16/01/2021</option>
    <option >26/01/2021</option>
</select>
              </div>
              </form>
      </div>
		</div>
    </div>

  </>
    )


  }
}