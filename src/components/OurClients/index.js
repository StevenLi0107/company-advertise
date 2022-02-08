/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import ArrowBack from "../../assets/client/arrow-back.svg";
import ArrowNext from "../../assets/client/arrow-next.svg";
import Business from "../../assets/client/client-business-icon.svg";
import SocialIcon from "../../assets/client/client-social-icon.svg";
import Corporation from "../../assets/client/corporation-icon.svg";
import CorvaLogo from "../../assets/client/corva-logo.png";
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
    logoImg: CorvaLogo,
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
    logoImg: GplanLogo,
    nameImg: "",
    duration: 5,
    location: "USA",
    business: "Large Business",
    description: "",
    services: "Frontend backend QA",
  },
  {
    key: "meituan_client",
    label: "Meituan",
    logoImg: MeituanLogo,
    nameImg: "",
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
      <div className="client-logo-list">
        {CLIENT_LIST.map((item) => (
          <img src={item.logoImg} alt="" />
        ))}
      </div>
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

          <div className="client-name-corporation-wrapper">
            <div className="client-name-img">
              <img src={CLIENT_LIST[clientIndex].nameImg} alt="" />
            </div>
            <div className="client-corporation-description">
              <img src={Corporation} alt="" style={{ marginRight: "5px" }} />
              <div>{`${CLIENT_LIST[clientIndex].duration} years of corporation`}</div>
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
              <img src={ArrowBack} alt="" style={{ marginRight: "5px" }} />
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
              <img src={ArrowNext} alt="" style={{ marginLeft: "5px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="OurClients-Container-module--cls2--2-EVq OurClients-Container-module--cls1--1kJDZ">
    //   <div
    //     className="OurClients-InnerContainer-module--cls2--2z1fX "
    //     style={{ marginLeft: 150 - scrollY }}
    //   >
    //     {listLen &&
    //       clientsList.map((client, index) => (
    //         <a className="OurClients-Company-module--cls2--3coqY" key={index}>
    //           <div className="gatsby-image-wrapper">
    //             <div
    //               aria-hidden="true"
    //               style={{ width: "100%", paddingBottom: "20%" }}
    //             ></div>
    //             <img
    //               //className="img"
    //               className="logo-image"
    //               aria-hidden="true"
    //               src={`https://api.cowork.dev/data/img/${client.img}`}
    //               alt={client.name}
    //               // style={{ width: 150 }}
    //             />
    //           </div>
    //         </a>
    //       ))}
    //     {listLen < 10 &&
    //       clientsList.map((client, index) => (
    //         <a
    //           className="OurClients-Company-module--cls2--3coqY"
    //           key={listLen + index}
    //         >
    //           <div className="gatsby-image-wrapper">
    //             <div
    //               aria-hidden="true"
    //               style={{ width: "100%", paddingBottom: "20%" }}
    //             ></div>
    //             <img
    //               className="logo-image"
    //               aria-hidden="true"
    //               src={`https://api.cowork.dev/data/img/${client.img}`}
    //               alt={client.name}
    //             />
    //           </div>
    //         </a>
    //       ))}
    //     {listLen < 5 &&
    //       clientsList.map((client, index) => (
    //         <a
    //           className="OurClients-Company-module--cls2--3coqY"
    //           key={2 * listLen + index}
    //         >
    //           <div className="gatsby-image-wrapper">
    //             <div
    //               aria-hidden="true"
    //               style={{ width: "100%", paddingBottom: "20%" }}
    //             ></div>
    //             <img
    //               className="logo-image"
    //               aria-hidden="true"
    //               src={`https://api.cowork.dev/data/img/${client.img}`}
    //               alt={client.name}
    //             />
    //           </div>
    //         </a>
    //       ))}

    //     {/* <a className="OurClients-Company-module--cls2--3coqY OurClients-Company-module--cls1--1coVO">
    //       <div className="gatsby-image-wrapper">
    //         <div
    //           aria-hidden="true"
    //           style={{ width: "100%", paddingBottom: "30%" }}
    //         ></div>
    //         <img
    //           className="img"
    //           aria-hidden="true"
    //           src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA3ElEQVQY02NgQAO6uroMBgYGYDaQ5tHT0/MGirUCcReQHQvE4iA5HR0dBiMjIwaCAGQgUBOMnQTEqcbGxly+vr6MQLY7EBcADeOFqSXKQCjNBMRZQNwMtCAb6spqfX19X5haoEWEDdTU1ATTGhoaHFpaWvFA13QB8Vognq+trb0DKJ8EkjczM2NkZWUlbGBERASYdnJyYoqOjvYF8pOBOCEqKioCiEF0dmhoKB9IDVCesIE5OTlgur6+njE7O7sUiCcAcWdmZmZTVlZWE1C+LT8/XwSkJjc3lxFdPwAtwzqI4ZtytgAAAABJRU5ErkJggg=="
    //           alt="логотип ПИК"
    //         />
    //       </div>
    //     </a> */}
    //     {/* <a className="OurClients-Company-module--cls2--3coqY OurClients-Company-module--cls1--1coVO">
    //       <div className="gatsby-image-wrapper">
    //         <div
    //           aria-hidden="true"
    //           style={{ width: "100%", paddingBottom: "30%" }}
    //         ></div>
    //         <img
    //           className="img"
    //           aria-hidden="true"
    //           src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA3ElEQVQY02NgQAO6uroMBgYGYDaQ5tHT0/MGirUCcReQHQvE4iA5HR0dBiMjIwaCAGQgUBOMnQTEqcbGxly+vr6MQLY7EBcADeOFqSXKQCjNBMRZQNwMtCAb6spqfX19X5haoEWEDdTU1ATTGhoaHFpaWvFA13QB8Vognq+trb0DKJ8EkjczM2NkZWUlbGBERASYdnJyYoqOjvYF8pOBOCEqKioCiEF0dmhoKB9IDVCesIE5OTlgur6+njE7O7sUiCcAcWdmZmZTVlZWE1C+LT8/XwSkJjc3lxFdPwAtwzqI4ZtytgAAAABJRU5ErkJggg=="
    //           alt="логотип ПИК"
    //         />
    //       </div>
    //     </a> */}
    //   </div>
    // </div>
  );
};

export default OurClients;
