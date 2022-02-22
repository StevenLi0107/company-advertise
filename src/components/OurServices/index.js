import { useCallback, useEffect, useState } from "react";

import ServiceNormalImg from "../../assets/services/service_last_normal.svg";
import ServiceActiveImg from "../../assets/services/service_last_active.svg";

import "./styles.css";

const SERVICES_LIST = [
  "Frontend development",
  "backend development",
  "mobile development",
  "design",
  "quality assurance",
  "our service your idea",
];

const OurServices = () => {
  const [isMouseOver, setIsOver] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleMouseMove = (mouseMove, index) => {
    setIsOver(mouseMove);
    if (mouseMove) setSelectedIndex(index);
    else setSelectedIndex(-1);
  };

  console.log("selectedIndex, isMouseOver", selectedIndex, isMouseOver);

  return (
    <>
      <div className="services-container">
        <span className="services-title">services</span>
        <span className="services-content">
          We help our customers understand and experience the benefits of
          software
          <br /> solutions for their businesses by delivering projects fast and
          cost efficiently.
        </span>
        <div className="services-items">
          {SERVICES_LIST.map((item, index) =>
            index < 5 ? (
              <div
                className="service-item-normal"
                onMouseEnter={() => handleMouseMove(true, index)}
                onMouseLeave={() => handleMouseMove(false, index)}
              >
                <span
                  className={`service-index ${
                    !isMouseOver
                      ? "service-index-active"
                      : selectedIndex === index
                      ? "service-index-active"
                      : "service-index-deactive"
                  }`}
                >
                  {index + 1}
                </span>

                <span
                  className={`service-text ${
                    !isMouseOver
                      ? "service-text-active"
                      : selectedIndex === index
                      ? "service-text-active"
                      : "service-text-deactive"
                  }`}
                >
                  {item}
                </span>
              </div>
            ) : (
              <div className="service-item-last">
                <img
                  src={ServiceActiveImg}
                  alt="service-last-img"
                  className="service-last-img"
                />
                <span className="service-last-text">{item}</span>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default OurServices;
