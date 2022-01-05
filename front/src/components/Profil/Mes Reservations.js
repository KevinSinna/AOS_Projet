import React from 'react';
import Dashboard from './Dashboard';

export default function Mesreservation() {
    return (
          <div class="bg-gray-50 ">
      <div>
        <div class="p-4">
          
          <div class="bg-white p-4 rounded-md">
            <div>
              
              <h2 class="mb-4 text-xl font-bold text-gray-700">MES RESERVATIONS</h2>
              <div>
                <div>
                  <div class="flex justify-between bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-md py-1 px-3 text-Black font-bold text-md">
                    <div>
                      <span>Nom</span>
                    </div>
                    <div>
                      <span>Numéro de téléphone</span>
                    </div>
                    <div>
                      <span>
                        Service
                      </span>
                    </div>
                    <div>
                      <span>Date</span>
                    </div>
                    <div>
                      <span>Modifier</span>
                    </div>
                  </div>
                  <div>
                    <div class="flex justify-between border-t text-sm font-normal mt-2 space-x-2">
                      <div class="px-2 flex">
                        <span>Badr Hamidi</span>
                      </div>
                      <div>
                        <span>ect@gmail.com</span>
                      </div>
                      <div class="px-2">
                        <span>Plomberie</span>
                      </div>
                      <div class="px-2">
                        <span>30/12/2021</span>
                      </div>
                      <div class="px-2">
                      <button>
                          Consulter
                      </button>
                      </div>
                    </div>
                    <div class="flex justify-between border-t-2 text-sm font-normal mt-4 space-x-4">
                      <div class="px-2">
                        <span>John Deo</span>
                      </div>
                      <div>
                        <span>johndeo@gmail.com</span>
                      </div>
                      <div class="px-2">
                        <span>Manucure</span>
                      </div>
                      <div class="px-2">
                        <span>28/12/2021</span>
                      </div>
                      <div class="px-2">
                        <button>
                          Modifier
                        </button>
                      </div>
                    </div>
                    <div class="flex justify-between border-t-2 text-sm font-normal mt-4 space-x-4">
                      <div class="px-2">
                        <span>John Deo</span>
                      </div>
                      <div>
                        <span>johndeo@gmail.com</span>
                      </div>
                      <div class="px-2">
                        <span>Admin</span>
                      </div>
                      <div class="px-2">
                        <span>28/12/2021</span>
                      </div>
                      <div class="px-2">
                        <button>
                          Modifier
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}