import { useState, useRef, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, makeStyles } from "@material-ui/core";

import ContactUs from "../../components/ContactUs";
import MainContainer from "../../components/MainContainer";
import MainHeader from "../../components/MainHeader";
import MainFooter from "../../components/MainFooter";
import OurExpertise from "../../components/OurExpertise";
import OurCases from "../../components/OurCases";
import OurClients from "../../components/OurClients";

import {
  getPortfoliosList,
  getClientsList,
  getUserList,
} from "../../redux/actions/adminAction";

const useStyles = makeStyles({
  mainContainer: {
    width: "100%",
    minWidth: "1200px",
    display: "flex",
    flexDirection: "column",
    background: "#1d1d1d",
    overflowX: "auto",
    position: "relative",
  },
});

const MainPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [active, setActive] = useState("");
  const [scrollPosition, setScrollPosition] = useState(false);

  const mainRef = useRef();
  const expertiseRef = useRef();
  const portfolioRef = useRef();
  const contactUsRef = useRef();
  const mainFooterRef = useRef();

  const isActiveLogosSection = useSelector(
    (state) => state.adminReducer.isActiveLogosSection
  );
  const isActiveDevelopersSection = useSelector(
    (state) => state.adminReducer.isActivePeopleSection
  );

  const handleScroll = useCallback(() => {
    // console.log(
    //   "window.pageYoffset:",
    //   window.pageYOffset,
    //   mainRef.current.offsetTop,
    //   expertiseRef.current.offsetTop,
    //   contactUsRef.current.offsetTop,
    //   mainFooterRef.current.offsetTop
    // );
    if (
      window.pageYOffset > mainRef.current.offsetTop &&
      window.pageYOffset < expertiseRef.current.offsetTop - 56
    ) {
      setActive("Main");
    }
    if (
      window.pageYOffset > expertiseRef.current.offsetTop - 60 &&
      window.pageYOffset < contactUsRef.current.offsetTop - 60
    ) {
      setActive("Expertise");
    }
    if (
      window.pageYOffset > contactUsRef.current.offsetTop - 60 &&
      window.pageYOffset < contactUsRef.current.offsetTop + 60
    ) {
      setActive("contactUs");
    }
    if (
      window.pageYOffset > contactUsRef.current.offsetTop + 100 &&
      window.pageYOffset < mainFooterRef.current.offsetTop
    ) {
      setActive("About");
    }
  }, []);

  const scrollToElement = useCallback((event, navActive) => {
    // console.log("scroll id:", event.target.id);
    event.preventDefault();
    const refs = {
      main: mainRef,
      expertise: expertiseRef,
      portfolio: mainRef,
      contactUs: contactUsRef,
      footer: mainFooterRef,
    };
    window.scrollTo({
      behavior: "smooth",
      top: refs[event.target.id].current.offsetTop - 56,
    });

    setActive(navActive);
  }, []);

  useEffect(() => {
    // dispatch(getPortfoliosList());
    dispatch(getClientsList());
    // dispatch(getUserList());
  }, [dispatch]);

  // console.log("isActiveDevelopersSection:", isActiveDevelopersSection);
  return (
    <div ref={mainRef} className={classes.mainContainer}>
      <MainHeader
        scrollToElement={scrollToElement}
        onScrollChange={handleScroll}
        active={active}
      />
      <MainContainer scrollToElement={scrollToElement} />
      {/* {isActiveLogosSection && <OurClients />} */}
      {/* <Box ref={portfolioRef}>
        <OurCases />
      </Box> */}
      <Box ref={expertiseRef}>
        <OurExpertise />
        {isActiveLogosSection && <OurClients />}
      </Box>

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
