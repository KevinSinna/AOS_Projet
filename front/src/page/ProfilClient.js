  import React from 'react';
  import Navbar from '../components/NavBar/Navbar';
  import InfoClient from '../components/Profil/InfoClient';
  import Prestationprofil from '../components/Profil/Prestationencours';

  const ProfilClient = () => {
      return (
          <div>
              <Navbar/>
              <InfoClient/>
              <Prestationprofil/>
          </div>
      );
  };

  export default ProfilClient;