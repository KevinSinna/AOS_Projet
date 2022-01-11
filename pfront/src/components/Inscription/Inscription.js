import React from "react";
import image from "../../assets/img/logo.png";

export default class Inscription extends React.Component{
  constructor(props){
    super(props);
    this.registrer = this.registrer.bind(this);
  }
  async registrer()
  { const items = {
    nom : document.getElementById("nom").value,
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
            <p className="mt-2 text-center text-sm text-pink-600">
              Ou{' '}
              <a href="./connexion" className="font-light text-pink-500 hover:text-pink-700">
               Déja membre ?
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
            <div>
                <label htmlFor="Nom" className="sr-only">
                  Nom
                </label>
                <input
                  id="nom"
                  name="nom"
                  type="nom"
                  autoComplete="nom"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Nom "
                />
              </div>
              <div>
                <label htmlFor="Prénom" className="sr-only">
                  Prénom
                </label>
                <input
                  id="prenom"
                  name="Prénom"
                  type="noPrénomm"
                  autoComplete="Prénom"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Prénom "
                />
              </div>
              <div>
                <label htmlFor="adresse" className="sr-only">
                  Addresse 
                </label>
                <input
                  id="adresse"
                  name="adresse"
                  type="adresse"
                  autoComplete="adresse"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Adresse Postale"
                />
              </div>
              <div>
                <label htmlFor="Ville" className="sr-only">
                  Ville 
                </label>
                <input
                  id="Ville"
                  name="Ville"
                  type="Ville"
                  autoComplete="Ville"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Ville"
                />
              </div>
              <div>
                <label htmlFor="Code Postale" className="sr-only">
                  Code Postale 
                </label>
                <input
                  id="code_Postale"
                  name="Code_Postale"
                  type="Code Postale"
                  autoComplete="Code Postale"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Code Postale"
                />
              </div>
              <div>
                <label htmlFor="Code Postale" className="sr-only">
                  Numéro de téléphone
                </label>
                <input
                  id="telephon_number"
                  name="telephon_number"
                  type="telephon_number"
                  autoComplete="Numéro de téléphone"
                  required
                  className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Numéro de téléphone"
                />
              </div>
              </div>
              <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Addresse Mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Adresse éléctronique"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Mot de passe
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
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