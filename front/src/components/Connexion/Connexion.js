import React from "react"
import image from "../../assets/img/logo.png"
const API_URL ="http://localhost:4000";
let browserHistory
try {
  browserHistory = require('react-router').browserHistory
} catch (e) {}
export default class Connexion extends React.Component {
constructor(props){
  super(props);
  this.handleConnexion = this.handleConnexion.bind(this);
}
  async loginUser( email, motdepasse , props) {
    const items = {email : "julius@gmail.com" ,motdepasse: "juliuspassword"};
    console.log("en cours");
    const response = await fetch(`${API_URL}/clients/connexion`,{
          method : 'POST',
          body:JSON.stringify(items),
          headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
          }})
          const data = await response.json();
          try {
              console.log(data)
                    localStorage.setItem("token", data.AccesToken)    
                        this.props.browserHistory.Push("/home");
                } 
            
            catch {
               console.log('Incorrect Login Info');
            };
    
}
async handleConnexion(props){
  console.log("connexion");
 const person = { 
   email : document.getElementById("email").value,
   motdepasse : document.getElementById("password").value,
  }
  await this.loginUser(person.email,person.motdepasse, props);

} 

  render(){
  return (
    <>

      <div className="min-h-screen bg-pack-train bg-cover bg-center flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-40 w-30 "
              src = {image} 
              alt="logo"     
            />
            <h2 className="mt-1 text-center text-3xl font-extrabold text-white">Connectez-vous à votre compte</h2>
            <p className="mt-2 text-center text-sm text-white">
              Ou{' '}
              <a href="./inscription" className="font-medium text-white hover:text-pink-700">
               Créer vous un compte
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={this.handleConnexion}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
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

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-white">
                  Se rappeler de moi
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-white hover:text-pink-700">
                  mot de passe oublié?
                </a>
              </div>
            </div>

            <div>
              <button
              type ="submit"
              onClick={this.handleConnexion}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  
                </span>
                Se Connecter
              </button>
            </div>
          </form>
          <button onClick={this.handleConnexion}>test</button>
        </div>
        <div><form className="flex items-center"><input type='text'id='test'placeholder="test"></input>
        <button type ="submit" onClick={this.handleConnexion}>Valide</button></form></div>
      </div>
    </>
  )
}
}