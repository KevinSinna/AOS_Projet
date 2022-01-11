import React from "react";
import Inscription from "../components/Inscription/Inscription";
import NavBar from '../components/NavBar/NavbarP'
function App() {
  const descr = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.";
  return (
<div class="dark:bg-gray-800 bg-white relative overflow-hidden h-screen">
    <NavBar/>
    <div class="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
        <div class="container mx-auto px-6 flex relative py-16">
            <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                <span class="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                </span>
                <h1 class="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                    Helfen
                    <span class="text-5xl sm:text-7xl">
                        Pro
                    </span>
                </h1>
                <p class="text-sm sm:text-base text-gray-700 dark:text-white">
                On n'est pas heureux parce qu'on est riche. Mais on peut être heureux, tout en étant riche. Il n'est pas impensable qu'un homme riche aménage, à côté de sa richesse, un authentique bonheur. Celui-ci ne sera pas imputable à la condition exceptionnelle de cet homme, mais à ce qu'il possède de commun avec tous les autres.                </p>
                <div class="flex mt-8">
                    <a href="http://localhost:3000/home" class="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                        Helfen 
                    </a>
                    <a href="./faq" class="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-blue-500 text-blue-600 dark:text-white hover:bg-blue-500 hover:text-white text-md">
                        Read more
                    </a>
                </div>
            </div>
            <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                <Inscription/>
            </div>
        </div>
    </div>
  </div>

    );}
  export default App;