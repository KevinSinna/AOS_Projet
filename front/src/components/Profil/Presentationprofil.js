import React from 'react';
import Prestationprofil from '../../components/Profil/Prestationencours';


export default function PP() {
    return (
<div class="bg-slate-700 w-full py-10 px-10">
  <div>
    <div class="sm:flex space-x-7 md:items-start items-center">
      <div class="mb-4">
        <img class="rounded-md md:w-80" src="https://www.breakflip.com/uploads2/Slash/LoL/vignette-lol-arcane-voix-jinx.jpg?ezimgfmt=rs:0x0/rscb3/ng:webp/ngcb3" alt="brad" />
      </div>
      <div>
        <h1 class="text-slate-100 text-4xl font-bold my-2">JINX CORP</h1>
        <p class="text-slate-100 text-lg tracking-wide mb-6 md:max-w-lg">Full stack web developer and online instructor, specializiing in mostly JS, but also write Python, PHP and some other stuff.</p>
        <button class="border-2 px-6 py-4 rounded-md border-indigo-600 text-slate-100 hover:bg-indigo-600 hover:text-indigo-100 transition duration-75">Prendre rendez-vous</button>
      </div>
    </div>
  </div>
  <div class="mt-8 sm:grid grid-cols-3 sm:space-x-4">
    <div class="bg-slate-600 p-6 rounded-md mb-4">
      <span class="text-slate-400 text-md">Adresse</span>
      <h2 class="text-slate-100 text-2xl font-semibold">12 rue ta mere la pute</h2>
    </div>
    <div class="bg-slate-600 p-6 rounded-md mb-4">
      <span class="text-slate-400 text-md">Numero de telephone </span>
      <h2 class="text-slate-100 text-2xl font-semibold">0344561286</h2>
    </div>
    <div class="bg-slate-600 p-6 rounded-md mb-4">
      <span class="text-slate-400 text-md">Site internet</span>
      <h2 class="text-slate-100 text-2xl font-semibold">www.jesuislmeilleur.fr</h2>
    </div>
  </div>
  <div class="sm:grid lg:grid-cols-4 grid-cols-2 sm:gap-x-4">
    <div class="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
      <div>
        <span class="text-md text-slate-400">Followers</span>
        <h1 class="text-3xl font-bold text-slate-100">47155</h1>
      </div>

    </div>
    <div class="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
      <div>
        <span class="text-md text-slate-400">Metier</span>
        <h1 class="text-3xl font-bold text-slate-100">Serrurier</h1>
      </div>

    </div>
    <div class="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
      <div>
        <span class="text-md text-slate-400">Public Rpos</span>
        <h1 class="text-3xl font-bold text-slate-100">236</h1>
      </div>

    </div>
    <div class="flex justify-between items-center bg-slate-600 p-6 rounded-md mb-4">
      <div>
        <span class="text-md text-slate-400">Public Gists</span>
        <h1 class="text-3xl font-bold text-slate-100">40</h1>
      </div>

    </div>
  </div>
</div>
    );
};