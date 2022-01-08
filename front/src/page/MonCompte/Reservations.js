import React from 'react';
import Navbar from '../../components/NavBar/Navbar2';
import Calendrier from '../../components/Profil/Calendrier';
import Dashboard from '../../components/Profil/Dashboard';
import Prestationencours from '../../components/Profil/Prestationencours';
import Mesreservation from '../../components/List/List';


const Reservation = () => {
    return (
        <div className="min-h-screen bg-pack-train bg-cover bg-center flex flex-col bg-fixed text-white mb1">
            <Navbar/>
            <div className='flex flex-row  '>
            <div className='h-full'>
            <Dashboard/></div>
            <div class="flex justify-center space-x-4 mt-2  ml-20 ">
            <Mesreservation/>
            </div>
            </div>
        </div>
    );
};

export default Reservation;