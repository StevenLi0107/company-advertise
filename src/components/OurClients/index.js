/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import ArrowBack from "../../assets/client/arrow-back.svg";
import ArrowNext from "../../assets/client/arrow-next.svg";
import Business from "../../assets/client/client-business-icon.svg";
import SocialIcon from "../../assets/client/client-social-icon.svg";
import Cooperation from "../../assets/client/cooperation-icon.svg";
import CorvaName from "../../assets/client/corva-name.svg";
import GplanLogo from "../../assets/client/gplan-logo.svg";
import GroupSelect from "../../assets/client/group-selected-icon.svg";
import GroupUnselect from "../../assets/client/group-unselected-icon.svg";
import LocationImg from "../../assets/client/location-img.svg";
import MeituanLogo from "../../assets/client/meituan-logo.png";
import Pattern from "../../assets/client/pattern.svg";

import "./styles.css";

const CLIENT_LIST = [
  {
    key: "corva_client",
    label: "Corva",
    nameImg: CorvaName,
    duration: 5,
    location: "USA",
    business: "Large Business",
    description: "",
    services: "Frontend backend QA",
  },
  {
    key: "gplans_client",
    label: "gplans",
    nameImg: GplanLogo,
    duration: 5,
    location: "USA",
    business: "Large Business",
    description: "",
    services: "Frontend backend QA",
  },
  {
    key: "meituan_client",
    label: "Meituan",
    nameImg: MeituanLogo,
    duration: 5,
    location: "USA",
    business: "Large Business",
    description: "",
    services: "Frontend backend QA",
  },
];

const OurClients = () => {
  const clientsList = useSelector((state) => state.adminReducer.clientsList);
  const [scrollY, setScrollY] = useState(0);
  const [clientIndex, setClientIndex] = useState(0);

  const handleFollow = () => {
    setScrollY(window.pageYOffset);
  };

  const handlePageMove = (event) => {
    if (event.target.id === "back") {
      clientIndex > 0 && setClientIndex((prev) => prev - 1);
    } else if (event.target.id === "next") {
      clientIndex < 2 && setClientIndex((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  });
  const listLen = clientsList.length;

  return (
    <div className="client-container">
      <div className="client-title">our clients</div>
      <div className="client-service-description">
        Our software development company is really proud of the great clients
        <br />
        that we’ve had a chance to cooperate with
      </div>
      {/* <div className="client-logo-list"> */}
      {/* {CLIENT_LIST.map((item) => (
          <img src={item.logoImg} alt="" />
        ))} */}
      <div
        className="client-logo-img-scroll-wrapper"
        style={{ marginLeft: 1800 - scrollY }}
      >
        <div className="client-logo-list">
          {listLen &&
            clientsList.map((client, index) => (
              <img
                className="logo-image"
                aria-hidden="true"
                src={`https://api.cowork.dev/data/img/${client.img}`}
                alt={client.name}
              />
            ))}
        </div>
        <div className="client-logo-list">
          {listLen < 3 &&
            clientsList.map((client, index) => (
              <img
                className="logo-image"
                aria-hidden="true"
                src={`https://api.cowork.dev/data/img/${client.img}`}
                alt={client.name}
              />
            ))}
        </div>
      </div>
      {/* </div> */}
      <div className="client-information-wrapper">
        <div className="client-solution-description">
          <img src={Pattern} alt="" className="client-solution-pattern-img" />
          <div className="client-solution-background">
            <div className="client-solution-content">
              <div className="client-solution-title">
                Solution Built
                <br /> To Perfection
              </div>
              <div className="client-solution-content-text">
                We enjoy long-term partnerships and each step during the
                creation of the best products within different niches
              </div>
            </div>
          </div>
        </div>
        <div className="client-information-description-wrapper">
          <div className="client-social-img-wrapper">
            <img src={SocialIcon} alt="" className="client-social-img" />
          </div>

          <div className="client-name-cooperation-wrapper">
            <img
              className="client-name-img"
              src={CLIENT_LIST[clientIndex].nameImg}
              alt=""
            />
            <div className="client-cooperation-description">
              <img src={Cooperation} alt="" style={{ marginRight: "5px" }} />
              <div>{`${CLIENT_LIST[clientIndex].duration} years of cooperation`}</div>
            </div>
          </div>
          <div className="client-information-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
          <div className="client-location-business-wrapper">
            <div className="client-location-wrapper">
              <img src={LocationImg} alt="" style={{ marginRight: "5px" }} />
              <p>{CLIENT_LIST[clientIndex].location}</p>
            </div>
            <div className="client-location-wrapper">
              <img src={Business} alt="" style={{ marginRight: "5px" }} />
              <p>{CLIENT_LIST[clientIndex].business}</p>
            </div>
          </div>
          <div className="client-service-title">Services:</div>
          <div className="client-service-list">
            {CLIENT_LIST[clientIndex].services}
          </div>
          <div className="client-information-page-wrapper">
            <div className="client-back-next-page">
              <img
                id="back"
                src={ArrowBack}
                alt=""
                style={{ marginRight: "5px" }}
                onClick={handlePageMove}
              />
              BACK
            </div>
            <div className="client-information-group-page">
              {CLIENT_LIST.map((item, index) =>
                index === clientIndex ? (
                  <img
                    src={GroupSelect}
                    alt=""
                    style={{ width: "7px", height: "7px" }}
                  />
                ) : (
                  <img
                    src={GroupUnselect}
                    alt=""
                    style={{ width: "7px", height: "7px" }}
                  />
                )
              )}
            </div>
            <div className="client-back-next-page">
              NEXT
              <img
                id="next"
                src={ArrowNext}
                alt=""
                style={{ marginLeft: "5px" }}
                onClick={handlePageMove}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
