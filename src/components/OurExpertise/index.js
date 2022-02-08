import { useState, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";

import "./styles.css";

import JavascriptLogo from "../../assets/expertise/javascript-logo.svg";
import ReactLogo from "../../assets/expertise/react-logo.svg";
import AngularLogo from "../../assets/expertise/angular-logo.svg";
import HtmlLogo from "../../assets/expertise/html-logo.svg";
import CSSLogo from "../../assets/expertise/css-logo.svg";
import NodejsLogo from "../../assets/expertise/node-js-logo.svg";
import PhpLogo from "../../assets/expertise/php-logo.svg";
import PythonLogo from "../../assets/expertise/python-logo.svg";

const EXPERTISE_LIST = [
  {
    key: "javascript",
    label: "JAVASCRIPT",
    img: JavascriptLogo,
  },
  {
    key: "react",
    label: "REACT",
    img: ReactLogo,
  },
  {
    key: "angular",
    label: "ANGULAR",
    img: AngularLogo,
  },
  {
    key: "html5",
    label: "HTML 5",
    img: HtmlLogo,
  },
  {
    key: "css-key",
    label: "CSS 3",
    img: CSSLogo,
  },
  {
    key: "node-js",
    label: "NODE JS",
    img: NodejsLogo,
  },
  {
    key: "php-key",
    label: "PHP",
    img: PhpLogo,
  },
  {
    key: "python",
    label: "PYTHON",
    img: PythonLogo,
  },
];

const OurExpertise = ({ ref }) => {
  return (
    <div className="expertise-container">
      <div className="expertise-title">Our Expertise</div>
      <div className="expertise-description">
        Varied tech-stacks and the ability to adapt quickly is one of our
        advantages
        <br /> in modern software developing “pool”.
      </div>
      <div>
        <div className="expertise-logo-wrapper">
          {EXPERTISE_LIST.map((item) => (
            <div className="expertise-logo-item-wrapper">
              <div className="expertise-logo-img">
                <img src={item.img} alt="logo" />
              </div>
              <div className="expertise-logo-text">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="expertise-line"></div>
    </div>
  );
};

export default OurExpertise;
