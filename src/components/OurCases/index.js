import { useState } from "react";
import { useSelector } from "react-redux";
import ArrowBack from "../../assets/client/arrow-back.svg";
import ArrowNext from "../../assets/client/arrow-next.svg";
import Business from "../../assets/client/client-business-icon.svg";
import Cooperation from "../../assets/client/cooperation-icon.svg";
import GroupSelect from "../../assets/client/group-selected-icon.svg";
import GroupUnselect from "../../assets/client/group-unselected-icon.svg";
import LocationImg from "../../assets/client/location-img.svg";
import Pattern from "../../assets/client/pattern.svg";
import "./styles.css";

const OurCases = ({ ref }) => {
  const portfoliosList = useSelector(
    (state) => state.adminReducer.portfoliosList
  );

  const [clientIndex, setClientIndex] = useState(0);

  const handlePageMove = (id) => {
    if (id === "back") {
      clientIndex > 0 && setClientIndex((prev) => prev - 1);
    } else if (id === "next") {
      clientIndex < portfoliosList.length - 1 &&
        setClientIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="portfolio-container">
      {portfoliosList.length > 0 && (
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
              <a
                href={portfoliosList[clientIndex].social_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="client-social-img"></div>
              </a>
            </div>
            <div className="client-information">
              <div className="client-name-cooperation-wrapper">
                <img
                  className="client-name-img"
                  src={`https://api.cowork.dev/data/img/${portfoliosList[clientIndex].img}`}
                  alt="Mobile App won International Social Media Awards and Best Media / Media App"
                />
                <div className="client-cooperation-description">
                  <img
                    src={Cooperation}
                    alt=""
                    style={{ marginRight: "5px" }}
                  />
                  <div>{`${portfoliosList[clientIndex].company_age} of cooperation`}</div>
                </div>
              </div>

              <div className="client-information-text">
                {portfoliosList[clientIndex].description}
              </div>
              <div className="client-location-business-wrapper">
                <div className="client-location-wrapper">
                  <img
                    src={LocationImg}
                    alt=""
                    style={{ marginRight: "5px" }}
                  />
                  <p>{portfoliosList[clientIndex].location}</p>
                </div>
                <div className="client-location-wrapper">
                  <img src={Business} alt="" style={{ marginRight: "5px" }} />
                  <p>{portfoliosList[clientIndex].business}</p>
                </div>
              </div>
              <div className="client-service-title">Services:</div>
              <div className="client-service-list">
                {portfoliosList[clientIndex].services}
              </div>
            </div>
            {portfoliosList.length > 1 ? (
              <div className="client-information-page-wrapper">
                {clientIndex > 0 ? (
                  <div
                    id="back"
                    className="client-back-next-page"
                    onClick={() => handlePageMove("back")}
                  >
                    <img
                      id="backImg"
                      src={ArrowBack}
                      alt=""
                      style={{ marginRight: "5px" }}
                    />
                    <p>BACK</p>
                  </div>
                ) : (
                  <div style={{ width: "78px" }}></div>
                )}
                <div className="client-information-group-page">
                  {portfoliosList.map((item, index) =>
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
                {clientIndex < portfoliosList.length - 1 ? (
                  <div
                    id="next"
                    className="client-back-next-page"
                    onClick={() => handlePageMove("next")}
                  >
                    <p>Next</p>
                    <img
                      id="nextImg"
                      src={ArrowNext}
                      alt=""
                      style={{ marginLeft: "5px" }}
                    />
                  </div>
                ) : (
                  <div style={{ width: "78px" }}></div>
                )}
              </div>
            ) : (
              <div className="client-information-page-wrapper-hidden"></div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default OurCases;
