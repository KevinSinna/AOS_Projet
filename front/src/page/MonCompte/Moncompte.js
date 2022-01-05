import React from 'react';
import Navbar from '../../components/NavBar/Navbar2';
import Dashboard from '../../components/Profil/Dashboard';
import InfoClient from '../../components/Profil/InfoClient';

const moncompte = () => {
    return (
        <div>
            <Navbar/>
            <Dashboard/>
            <InfoClient/>
        </div>
    );
};

export default moncompte;