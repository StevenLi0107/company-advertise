import React from "react";
import { useDispatch } from "react-redux";
import ContactUs from "../../components/ContactUs";
import HeaderContainer from "../../components/HeaderContainer";
import MainHeader from "../../components/MainHeader";
import OurCases from "../../components/OurCases";
import OurClients from "../../components/OurClients";
import "./index.css";
import { useSelector } from "react-redux";
import { Box } from "@material-ui/core";
import {
  getPortfoliosList,
  getClientsList,
} from "../../redux/actions/adminAction";

const MainPage = () => {
  const dispatch = useDispatch();
  const portfolioRef = React.useRef();
  const contactUsRef = React.useRef();
  const mainRef = React.useRef();
  const isActiveLogosSection = useSelector(
    (state) => state.adminReducer.isActiveLogosSection
  );

  const scrollToElement = React.useCallback(({ currentTarget: { id } }) => {
    const refs = {
      portfolio: portfolioRef,
      contactUs: contactUsRef,
      main: mainRef,
    };
    window.scrollTo({
      behavior: "smooth",
      top: refs[id].current.offsetTop,
    });
  }, []);
  React.useEffect(() => {
    dispatch(getPortfoliosList());
    dispatch(getClientsList());
  }, [dispatch]);

  return (
    <div ref={mainRef}>
      <MainHeader scrollToElement={scrollToElement} />
      <HeaderContainer />
      {isActiveLogosSection && <OurClients />}
      <Box ref={portfolioRef}>
        <OurCases />
      </Box>
      <Box ref={contactUsRef}>
        <ContactUs />
      </Box>
    </div>
  );
};

export default MainPage;
