import React from 'react';
import Navbar from '../../components/NavBar/Navbar2';
import Dashboard from '../../components/Profil/Dashboard';
import InfoClient from '../../components/Profil/InfoClient';

const moncompte = () => {
    return (
        <div>
            <Navbar/>
            <div className='flex flex-row '>
                
            <Dashboard/>
            <InfoClient/>
            </div>
        </div>
    );
};

export default moncompte;