import { useState, useEffect, useCallback } from "react";
import logo from "../../assets/logo.svg";
import "./style.css";

const MainHeader = ({ scrollToElement, onScrollChange, active }) => {
  // const [active, setActive] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", onScrollChange);
    return () => {
      window.removeEventListener("scroll", onScrollChange);
    };
  });

  // const handleScroll = useCallback(() => {
  //   if (window.pageYOffset > 0) return setScrollPosition(true);
  //   setScrollPosition(false);
  // }, []);

  const handleNavBarClick = (event, navActive) => {
    scrollToElement(event, navActive);
  };

  return (
    <>
      <div className="navBar">
        {/** Logo */}
        <div className="header-left">
          <img className="logo-img" src={logo} alt="logo" />
          <div className="logo-text">
            <span className="logo-name">COWORK</span>
            <span className="logo-service-text">DEVELOPMENT</span>
          </div>
        </div>
        {/** Navbar */}
        <div className="Link-Container">
          <a
            id="main"
            onClick={(event) => handleNavBarClick(event, "Main")}
            className={active === "Main" && "active"}
            href="/"
          >
            Main
          </a>
          <a
            id="services"
            onClick={(event) => handleNavBarClick(event, "Services")}
            className={active === "Services" && "active"}
            href="/"
          >
            Services
          </a>
          <a
            id="expertise"
            onClick={(event) => handleNavBarClick(event, "Expertise")}
            className={active === "Expertise" && "active"}
            href="/"
          >
            Expertise
          </a>
          <a
            id="portfolio"
            onClick={(event) => handleNavBarClick(event, "Portfolio")}
            className={active === "Portfolio" && "active"}
            href="/"
          >
            Clients
          </a>
          <a
            id="about"
            onClick={(event) => handleNavBarClick(event, "About")}
            className={active === "About" && "active"}
            href="/"
          >
            About us
          </a>
          <button
            className="header-special"
            id="contactUs"
            onClick={scrollToElement}
          >
            Contact us
          </button>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
