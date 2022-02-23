import React from "react";
import ArrowDown from "../../assets/arrow-down.svg";
import BackImg from "../../assets/background-img.png";
import { SOCIAL_LIST } from "../../constant.js";
import "./styles.css";

const MainContainer = ({ scrollToElement }) => {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
      }}
    >
      <img src={BackImg} alt="background" className="main-background-img" />
      {/* <div className="main-background-img"></div> */}
      {/* <div className="main-background-gradient"></div> */}
      {/* <div className="main-bottom-gradient"></div> */}
      <div className="main-Section">
        <div className="main-container">
          <div className="main-title">
            Crossplatform&nbsp;
            <span className="main-title-span">software development</span>
          </div>
          <div className="main-content-text">
            We are a multinational creative software development
            <br />
            company offering robust Frontend and Backend solutions
            <br /> on Mobile, Web and Cloud platforms.
          </div>
          <button
            className="contact-btn"
            id="contactUs"
            onClick={scrollToElement}
          >
            Contact us
          </button>
          <div className="main-social-wrapper">
            {SOCIAL_LIST.map((item) => (
              <a
                className="main-social-item"
                href={item.href}
                target="_blank"
                aria-label={item.label}
                rel="noopener noreferrer"
              >
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="arrow-button-wrapper">
          <img
            className="arrow-button"
            id="services"
            src={ArrowDown}
            alt=""
            onClick={(event) => scrollToElement(event, "Services")}
          />
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
