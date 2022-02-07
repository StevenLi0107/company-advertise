import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, makeStyles } from "@material-ui/core";

import ContactUs from "../../components/ContactUs";
import MainContainer from "../../components/MainContainer";
import MainHeader from "../../components/MainHeader";
import MainFooter from "../../components/MainFooter";
import OurCases from "../../components/OurCases";
import OurClients from "../../components/OurClients";

import {
  getPortfoliosList,
  getClientsList,
  getUserList,
} from "../../redux/actions/adminAction";

const useStyles = makeStyles({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    background: "#1d1d1d",
    minWidth: "1200px",
    overflowX: "auto",
    position: "relative",
  },
});

const MainPage = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const mainRef = React.useRef();
  const portfolioRef = React.useRef();
  const contactUsRef = React.useRef();
  const mainFooterRef = React.useRef();

  const isActiveLogosSection = useSelector(
    (state) => state.adminReducer.isActiveLogosSection
  );
  const isActiveDevelopersSection = useSelector(
    (state) => state.adminReducer.isActivePeopleSection
  );

  const scrollToElement = React.useCallback((event) => {
    console.log("scroll id:", event.target.id);
    event.preventDefault();
    const refs = {
      main: mainRef,
      expertise: mainRef,
      portfolio: mainRef,
      contactUs: contactUsRef,
      footer: mainFooterRef,
    };
    window.scrollTo({
      behavior: "smooth",
      top: refs[event.target.id].current.offsetTop - 56,
    });
  }, []);

  React.useEffect(() => {
    dispatch(getPortfoliosList());
    // dispatch(getClientsList());
    // dispatch(getUserList());
  }, [dispatch]);

  console.log("isActiveDevelopersSection:", isActiveDevelopersSection);
  return (
    <div ref={mainRef} className={classes.mainContainer}>
      <MainHeader scrollToElement={scrollToElement} />
      <MainContainer scrollToElement={scrollToElement} />
      {/* {isActiveLogosSection && <OurClients />} */}
      {/* <Box ref={portfolioRef}>
        <OurCases />
      </Box> */}
      <Box ref={contactUsRef}>
        <ContactUs />
      </Box>
      <Box ref={mainFooterRef}>
        <MainFooter />
      </Box>
    </div>
  );
};

export default MainPage;
