import React from 'react';
import Navbar from '../../components/NavBar/Navbar2';
import Calendrier from '../../components/Profil/Calendrier';
import Prestationencours from '../../components/Profil/Prestationencours';

const Reservation = () => {
    return (
        <div>
            <Navbar/>
            <Calendrier/>
            <Prestationencours/>
        </div>
    );
};

export default Reservation;