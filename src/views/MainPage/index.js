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
import OurServices from "../../components/OurServices";
import AboutUs from "../../components/AboutUs";
import Customer from "../../components/Customer";

import {
  getPortfoliosList,
  getClientsList,
  // getUserList,
} from "../../redux/actions/adminAction";

const MainPage = () => {
  const dispatch = useDispatch();

  const [active, setActive] = useState("");
  // const [scrollPosition, setScrollPosition] = useState(false);

  const mainRef = useRef();
  const servicesRef = useRef();
  const expertiseRef = useRef();
  const clientRef = useRef();
  const contactUsRef = useRef();
  const aboutRef = useRef();

  // const isActiveLogosSection = useSelector(
  //   (state) => state.adminReducer.isActiveLogosSection
  // );
  // const isActiveDevelopersSection = useSelector(
  //   (state) => state.adminReducer.isActivePeopleSection
  // );

  const portfoliosList = useSelector(
    (state) => state.adminReducer.portfoliosList
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
      window.pageYOffset < mainRef.current.offsetTop + 30
    ) {
      setActive("Main");
    }
    if (
      window.pageYOffset > servicesRef.current.offsetTop - 60 &&
      window.pageYOffset < servicesRef.current.offsetTop - 30
    ) {
      setActive("Services");
    }
    if (
      window.pageYOffset > expertiseRef.current.offsetTop - 60 &&
      window.pageYOffset < expertiseRef.current.offsetTop - 30
    ) {
      setActive("Expertise");
    }
    if (
      window.pageYOffset > clientRef.current.offsetTop - 60 &&
      window.pageYOffset < clientRef.current.offsetTop - 30
    ) {
      setActive("Clients");
    }
    if (
      window.pageYOffset > aboutRef.current.offsetTop - 60 &&
      window.pageYOffset < aboutRef.current.offsetTop - 30
    ) {
      setActive("About US");
    }
  }, []);

  const scrollToElement = useCallback((event, navActive) => {
    // console.log("scroll id:", event.target.id);
    event.preventDefault();
    const refs = {
      main: mainRef,
      services: servicesRef,
      expertise: expertiseRef,
      client: clientRef,
      about: aboutRef,
      contactUs: contactUsRef,
    };
    window.scrollTo({
      behavior: "smooth",
      top: refs[event.target.id].current.offsetTop - 56,
    });

    setActive(navActive);
  }, []);

  useEffect(() => {
    dispatch(getPortfoliosList());
    dispatch(getClientsList());
    // dispatch(getUserList());
  }, [dispatch]);

  return (
    <div
      ref={mainRef}
      style={{ width: "100%", background: "#1d1d1d", overflowX: "none" }}
    >
      <MainHeader
        scrollToElement={scrollToElement}
        onScrollChange={handleScroll}
        active={active}
      />
      <MainContainer scrollToElement={scrollToElement} />
      <Box ref={servicesRef}>
        <OurServices />
      </Box>
      <Box ref={expertiseRef}>
        <OurExpertise />
      </Box>

      <Box ref={clientRef}>
        <OurClients />
        {portfoliosList.length > 0 && <OurCases />}
      </Box>

      <Box ref={aboutRef}>
        <AboutUs />
      </Box>

      <Box>
        <Customer />
      </Box>

      <Box ref={contactUsRef}>
        <ContactUs />
      </Box>
      <Box>
        <MainFooter />
      </Box>
    </div>
  );
};

export default MainPage;
