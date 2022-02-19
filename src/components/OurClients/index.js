/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import "./styles.css";

const OurClients = () => {
  const clientsList = useSelector((state) => state.adminReducer.clientsList);
  const [scrollY, setScrollY] = useState(0);

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
      {listLen > 0 && (
        <div
          className="client-logo-img-scroll-wrapper"
          style={{ marginLeft: 0 - scrollY }}
        >
          {listLen > 0 &&
            clientsList.map((client, index) => (
              <img
                className="logo-image"
                aria-hidden="true"
                src={`https://api.cowork.dev/data/img/${client.img}`}
                alt={client.name}
              />
            ))}

          {listLen < 5 &&
            clientsList.map((client, index) => (
              <img
                className="logo-image"
                aria-hidden="true"
                src={`https://api.cowork.dev/data/img/${client.img}`}
                alt={client.name}
              />
            ))}

          {listLen < 10 &&
            clientsList.map((client, index) => (
              <img
                className="logo-image"
                aria-hidden="true"
                src={`https://api.cowork.dev/data/img/${client.img}`}
                alt={client.name}
              />
            ))}

          {listLen < 15 &&
            clientsList.map((client, index) => (
              <img
                className="logo-image"
                aria-hidden="true"
                src={`https://api.cowork.dev/data/img/${client.img}`}
                alt={client.name}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default OurClients;
