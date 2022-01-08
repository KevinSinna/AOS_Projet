import React from 'react';
import Navbar from '../../components/NavBar/Navbar2';
import Dashboard from '../../components/Profil/Dashboard';
import InfoClient from '../../components/Profil/InfoClient';
import Calendrier from '../../components/Profil/Calendrier';

const Agenda = () => {
    return (
        <div>
            <Navbar/>
            <div className='flex flex-row '><Dashboard/>
            <Calendrier/></div>
           
        </div>
    );
};

export default Agenda;