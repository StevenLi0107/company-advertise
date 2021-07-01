import React from 'react';
import ContactUs from '../../components/ContactUs';
import HeaderContainer from '../../components/HeaderContainer';
import MainHeader from '../../components/MainHeader';
import OurCases from '../../components/OurCases';
import OurClients from '../../components/OurClients';
import './index.css';

const MainPage = () => {
  return (
    <div>
      <MainHeader />
      <HeaderContainer />
      <OurClients />
      <OurCases />
      <ContactUs />
    </div>
  );
};

export default MainPage;
