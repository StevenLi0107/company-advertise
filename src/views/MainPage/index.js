import { useState, useRef, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@material-ui/core";

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
  const portfoliosList = useSelector(
    (state) => state.adminReducer.portfoliosList
  );

  const [active, setActive] = useState("Main");
  const [refreshFlag, setRefreshFlag] = useState(true);

  const mainRef = useRef();
  const servicesRef = useRef();
  const expertiseRef = useRef();
  const clientRef = useRef();
  const contactUsRef = useRef();
  const aboutRef = useRef();

  const handleScroll = useCallback(() => {
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
      window.pageYOffset > aboutRef.current.offsetTop + 60 &&
      window.pageYOffset < aboutRef.current.offsetTop + 120
    ) {
      setActive("About US");
    }
    if (window.pageYOffset > contactUsRef.current.offsetTop - 300) {
      setActive("contactUS");
    }
  }, []);

  const scrollToElement = (event, navActive) => {
    if (event.target.id !== "mainLogo") event.preventDefault();

    const refs = {
      mainLogo: mainRef,
      main: mainRef,
      services: servicesRef,
      expertise: expertiseRef,
      client: clientRef,
      about: aboutRef,
      contactUs: contactUsRef,
    };

    if (event.target.id) {
      window.scrollTo({
        behavior: "smooth",
        top:
          event.target.id === "about"
            ? refs[event.target.id].current?.offsetTop + 90
            : refs[event.target.id].current?.offsetTop - 56,
      });
    }
    setActive(navActive);
  };

  useEffect(() => {
    dispatch(getPortfoliosList());
    dispatch(getClientsList());

    // dispatch(getUserList());
  }, [dispatch]);

  useEffect(() => {
    if (refreshFlag) {
      setRefreshFlag(false);
      window.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    }
  }, [refreshFlag]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div style={{ width: "100%", background: "#1d1d1d", overflowX: "none" }}>
      <Box ref={mainRef}>
        <MainHeader
          scrollToElement={scrollToElement}
          onScrollChange={handleScroll}
          active={active}
        />
      </Box>
      <Box>
        <MainContainer scrollToElement={scrollToElement} />
      </Box>

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
