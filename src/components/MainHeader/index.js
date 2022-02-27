import { useState } from "react";
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
        <div
          className="header-left"
          id="mainLogo"
          onClick={(event) => handleNavBarClick(event, "Main")}
        >
          <img id="mainLogo" className="logo-img" src={logo} alt="logo" />
          <div id="mainLogo" className="logo-text">
            <span id="mainLogo" className="logo-name">
              COWORK
            </span>
            <span id="mainLogo" className="logo-service-text">
              DEVELOPMENT
            </span>
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
          <button
            className="header-special"
            id="contactUs"
            onClick={(event) => handleNavBarClick(event, "contactUs")}
          >
            Contact us
          </button>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
