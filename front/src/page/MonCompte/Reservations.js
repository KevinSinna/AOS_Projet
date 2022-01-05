import React from 'react';
import Navbar from '../../components/NavBar/Navbar2';
import Calendrier from '../../components/Profil/Calendrier';
import Dashboard from '../../components/Profil/Dashboard';
import Prestationencours from '../../components/Profil/Prestationencours';
import Mesreservation from '../../components/List/List';


const Reservation = () => {
    return (
        <div>
            <Navbar/>
            <Dashboard/>
            <Mesreservation/>
        </div>
    );
};

export default Reservation;