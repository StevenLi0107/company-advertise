import React from 'react';
import ContactUs from '../../components/ContactUs';
import HeaderContainer from '../../components/HeaderContainer';
import MainHeader from '../../components/MainHeader';
import OurCases from '../../components/OurCases';
import OurClients from '../../components/OurClients';
import './index.css';
import { useSelector } from 'react-redux';

const MainPage = () => {
  const isActiveLogosSection = useSelector(
    (state) => state.adminReducer.isActiveLogosSection,
  );
  return (
    <div>
      <MainHeader />
      <HeaderContainer />
      {isActiveLogosSection && <OurClients />}
      <OurCases />
      <ContactUs />
    </div>
  );
};

export default MainPage;
