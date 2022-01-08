import React from "react";
import image from "../../assets/img/persotest.png"
function Index() {
    return (
        <div className="flex flex-col h-full  shadow-md rounded-lg  ">
            {/* Sidebar starts */}
            {/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
            <div className="w-64 absolute sm:relative shadow-md rounded-lg bg-blue-800 text-white shadow md:h-full flex-col justify-between hidden sm:flex">
                <div>
                    
                    <ul className="mt-12">
                    <li className="flex w-full justify-between text-white mb-6 ">
                    <div className="flex items-center  px-8">
                        <div className="w-10 h-10 bg-cover rounded-md mr-3">
                            <img src={image} alt className="rounded-full h-full w-full overflow-hidden shadow" />
                        </div>
                        <div>
                            <p className="text-white text-sm font-medium">Badr Hamidoula</p>
                            
                        </div>
                    </div>
                    </li>
                        <li className="flex w-full justify-between text-white hover:text-black hover:bg-pink-300 cursor-pointer items-center px-8 py-3 mt-2 mb-2">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                                </svg>
                                <a href="./moncompte" className="text-sm  ml-2">Mes Informations</a>
                            </div>
                        </li>
                        <li className="flex w-full justify-between text-white  hover:text-black hover:bg-pink-300 cursor-pointer items-center px-8 py-3 mt-2 mb-2">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="8 16 10 10 16 8 14 14 8 16" />
                                    <circle cx={12} cy={12} r={9} />
                                </svg>
                                <a href="./agenda" className="text-sm  ml-2">Agenda</a>
                            </div>
                        </li>
                       
                     
                        <li className="flex w-full justify-between text-white  hover:text-black hover:bg-pink-300 cursor-pointer items-center px-8 py-3 mt-2 mb-2">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-stack" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="12 4 4 8 12 12 20 8 12 4" />
                                    <polyline points="4 12 12 16 20 12" />
                                    <polyline points="4 16 12 20 20 16" />
                                </svg>
                                <a href="./reservation" className="text-sm  ml-2">Reservation</a>
                            </div>
                        </li>
                        
                    </ul>


                    
                </div>
                
            </div>
            
   
            
        </div>
    );
}

export default Index;
