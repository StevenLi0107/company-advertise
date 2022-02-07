import { useState, useEffect, useCallback } from "react";
import logo from "../../assets/logo.svg";
import "./style.css";

const MainHeader = ({ scrollToElement }) => {
  const [scrollPosition, setScrollPosition] = useState(false);
  const [active, setactive] = useState("Main");

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const handleScroll = useCallback(() => {
  //   if (window.pageYOffset > 0) return setScrollPosition(true);
  //   setScrollPosition(false);
  // }, []);

  return (
    <>
      <div className="navBar">
        {/** Logo */}
        <div className="header-left">
          <img className="logo-wrapper" src={logo} alt="logo" />
          <div className="logo-text">
            <span className="logo-name">COWORK</span>
            <span className="logo-service-text">DEVELOPMENT</span>
          </div>
        </div>
        {/** Navbar */}
        <div className="Link-Container">
          <a
            id="main"
            onClick={scrollToElement}
            className={active === "Main" && "active"}
            href="/"
          >
            Main
          </a>
          <a
            id="expertise"
            onClick={scrollToElement}
            className={active === "Expertise" && "active"}
            href="/"
          >
            Expertise
          </a>
          <a
            id="portfolio"
            onClick={scrollToElement}
            className={active === "Portfolio" && "active"}
            href="/"
          >
            Portfolio
          </a>
          <a
            id="footer"
            onClick={scrollToElement}
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
          {/* <div className="special">
            <a onClick={() => setactive("")} href="#Contact">
              Contact us
            </a>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default MainHeader;
