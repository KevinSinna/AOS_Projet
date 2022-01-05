  import React from 'react';
  import Navbar from '../../components/NavBar/Navbar2';
  import InfoClient from '../../components/Profil/InfoClient';
  import Prestationprofil from '../../components/Profil/Prestationencours';
  import Dashboard from '../../components/Profil/Dashboard';
  import TableauReservation from '../../components/Profil/Mes Reservations';

  const ProfilClient = () => {
      return (
          <div>
              <Navbar/>
              <Dashboard/><TableauReservation/>
          </div>
      );
  };

  export default ProfilClient;