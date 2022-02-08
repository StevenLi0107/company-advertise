/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useSelector } from "react-redux";

const OurClients = () => {
  const clientsList = useSelector((state) => state.adminReducer.clientsList);
  const [scrollY, setScrollY] = React.useState(0);
  const handleFollow = () => {
    setScrollY(window.pageYOffset);
  };

  React.useEffect(() => {
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
    <div>
      <div className="client-container">
        <div className="client-title">our clients</div>
        <div className="client-service-description"></div>
        <div className="client-logo-list"></div>
        <div className="client-information-wrapper">
          <div className="client-solution-description">
            <div className="client-solution-pattern-img"></div>
            <div className="client-solution-background">
              <div className="client-solution-title">
                Solution Built
                <br /> To Perfection
              </div>
              <div className="client-solution-content">
                We enjoy long-term
                <br /> partnerships and each step
                <br /> during the creation of the best
                <br /> products within different
                <br /> niches
              </div>
            </div>
          </div>
          <div className="client-information-description-wrapper">
            <div className="client-social-img"></div>
            <div className="client-name-coorporation-wrapper">
              <span className="client-name-img"></span>
              <div className="client-coorporation-description"></div>
            </div>
            <div className="client-information-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className="client-location-business-wrapper">
              <div className="client-location-wrapper"></div>
              <div className="client-business-wrapper"></div>
            </div>
            <div className="client-services-information">Services:</div>
            <div className="client-service-list">FRONTEND BACKEND QA</div>
            <div className="client-information-change-wrapper">
              <div className="client-back-next-wrapper">BACK</div>
              <div className="client-information-group-img"></div>
              <div className="client-back-next-wrapper">NEXT</div>
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
