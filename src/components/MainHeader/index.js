import { useState, useEffect, useCallback } from "react";
import logo from "../../assets/logo.svg";
import "./style.css";

const HEADER_LIST = [
  {
    key: "main",
    name: "Main",
  },
  {
    key: "services",
    name: "Services",
  },
  {
    key: "expertise",
    name: "Expertise",
  },
  {
    key: "client",
    name: "Clients",
  },
  {
    key: "about",
    name: "About US",
  },
];

const MainHeader = ({ scrollToElement, onScrollChange, active }) => {
  const [isMouseOver, setIsOver] = useState(false);
  const [selectIndex, setSelectedIndex] = useState(-1);

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

  const handleMouseMove = (mouseMove, index) => {
    setIsOver(mouseMove);
    if (mouseMove) setSelectedIndex(index);
    else setSelectedIndex(-1);
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
          {HEADER_LIST.map((item, index) => (
            <a
              id={item.key}
              onClick={(event) => handleNavBarClick(event, `${item.name}`)}
              className={active === `${item.name}` && "active"}
              href="/"
              onMouseEnter={() => handleMouseMove(true, index)}
              onMouseLeave={() => handleMouseMove(false, -1)}
            >
              {item.name}
              <span
                id={item.key}
                className={
                  active === `${item.name}` ||
                  (isMouseOver && selectIndex === index)
                    ? "active-line-bar"
                    : "active-line-normal"
                }
              ></span>
            </a>
          ))}
          {/* <a
            id="main"
            onClick={(event) => handleNavBarClick(event, "Main")}
            className={active === "Main" && "active"}
            href="/"
            onMouseEnter={() => handleMouseMove(true, 1)}
            onMouseLeave={() => handleMouseMove(false, -1)}
          >
            Main
            <span
              id="main"
              className={
                active === "Main" || (isMouseOver && selectIndex === 1)
                  ? "active-line-bar"
                  : "active-line-normal"
              }
            ></span>
          </a>
          <a
            id="services"
            onClick={(event) => handleNavBarClick(event, "Services")}
            className={active === "Services" && "active"}
            href="/"
            onMouseEnter={() => handleMouseMove(true, 2)}
            onMouseLeave={() => handleMouseMove(false, -1)}
          >
            Services
            <span
              id="services"
              className={
                active === "Services" ? "active-line-bar" : "active-line-normal"
              }
            ></span>
          </a>
          <a
            id="expertise"
            onClick={(event) => handleNavBarClick(event, "Expertise")}
            className={active === "Expertise" && "active"}
            href="/"
            onMouseEnter={() => handleMouseMove(true, 3)}
            onMouseLeave={() => handleMouseMove(false, -1)}
          >
            Expertise
            <span
              id="expertise"
              className={
                active === "Expertise"
                  ? "active-line-bar"
                  : "active-line-normal"
              }
            ></span>
          </a>
          <a
            id="portfolio"
            onClick={(event) => handleNavBarClick(event, "Portfolio")}
            className={active === "Portfolio" && "active"}
            href="/"
            onMouseEnter={() => handleMouseMove(true, 4)}
            onMouseLeave={() => handleMouseMove(false, -1)}
          >
            Clients
            <span
              id="portfolio"
              className={
                active === "Portfolio"
                  ? "active-line-bar"
                  : "active-line-normal"
              }
            ></span>
          </a>
          <a
            id="about"
            onClick={(event) => handleNavBarClick(event, "About")}
            className={active === "About" && "active"}
            href="/"
            onMouseEnter={() => handleMouseMove(true, 5)}
            onMouseLeave={() => handleMouseMove(false, -1)}
          >
            About us
            <span
              id="about"
              className={
                active === "About" ? "active-line-bar" : "active-line-normal"
              }
            ></span>
          </a> */}
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
