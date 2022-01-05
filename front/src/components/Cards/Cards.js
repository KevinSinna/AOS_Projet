import React from "react";
import image from "../../assets/img/persotest.png"

export default function Cards(props) {
    return (
              <div class="max-w-sm rounded overflow-hidden shadow-lg bg-wh bg-cover bg-center mt-7 ">
                <div className=" bg-pack-font  ">
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 text-gray-700">{props.nom + " " + props.prenom}</div>
                  <p class="text-gray-700 text-base">
                      {props}
                    </p>
                  </div>
                                <div class="flex items-center">
                    <img class="w-10 h-10 rounded-full mr-4" src={image} alt="Avatar of Jonathan Reinink"/>
                    <div class="text-sm">
                      <p class="text-gray-900 leading-none">Jonathan Reinink</p>
                      <p class="text-gray-600">Aug 18</p>
                    </div>
                  </div>
                  <div class="px-6 pt-4 pb-2">
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Artiste</span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Coiffeur</span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Photographe</span>
                </div>
              </div>
              </div>
    )
}

