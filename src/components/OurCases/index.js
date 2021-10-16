import React from "react";
import { useSelector } from "react-redux";
// import { Avatar } from "@material-ui/core";
const OurCases = ({ ref }) => {
  const portfoliosList = useSelector(
    (state) => state.adminReducer.portfoliosList
  );

  return (
    <div
      ref={ref}
      className="WidthContainer-OuterContainer-module--cls2--2akaW WidthContainer-OuterContainer-module--cls1--1qDQ4"
    >
      <div className="WidthContainer-InnerContainer-module--cls2--32dv6 WidthContainer-InnerContainer-module--cls1--1Ms9D">
        <div className="OurCases-Container-module--cls2--3r3Xq OurCases-Container-module--cls1--13szu">
          <h2 className="OurCases-CustomTitle-module--cls2--344Ju OurCases-CustomTitle-module--cls1--13kNv commonStyles-Title-module--cls2--34psA commonStyles-Title-module--cls1--2d40n">
            Our cases
          </h2>
          <div className="OurCases-Column-module--cls2--3e6eD OurCases-Column-module--cls1--be_Sc">
            {portfoliosList &&
              portfoliosList.map((portfolio) => (
                <a
                  href="/Page/PortfolioMobile/big3"
                  className="OurCase-Container-module--cls2--1dWUN OurCase-Container-module--cls1--2MZpC"
                >
                  <div className="OurCase-Image-module--cls2--2XuQ0 OurCase-Image-module--cls1--1HAll">
                    <div className="gatsby-image-wrapper position-image">
                      <div
                        aria-hidden="true"
                        style={{ width: "100%", paddingBottom: "108%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="OurCase-SubImage-module--cls2--JE2nq OurCase-SubImage-module--cls1--1oK5I">
                    <div className="gatsby-image-wrapper position-image">
                      <div
                        aria-hidden="true"
                        style={{ width: "100%", paddingBottom: "108%" }}
                      >
                        <img
                          className="img"
                          aria-hidden="true"
                          src={`https://api.cowork.dev/data/img/${portfolio.img}`}
                          alt="Mobile App won International Social Media Awards and Best Media / Media App"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="OurCase-TextContainer-module--cls2--1V8FK OurCase-TextContainer-module--cls1--HzZ36">
                    {/* <Avatar
                      src={`https://api.cowork.dev/data/img/${portfolio.img}`}
                    /> */}
                    <span className="OurCase-Title-module--cls2--D696E OurCase-Title-module--cls1--cDbok">
                      {portfolio.name}
                    </span>
                    <span className="OurCase-Text-module--cls2--2Sjya OurCase-Text-module--cls1--1gpVJ">
                      {portfolio.description}
                    </span>
                  </div>
                </a>
              ))}

            {/* 
            <a
              href="/Page/PortfolioMobile/big3"
              className="OurCase-Container-module--cls2--1dWUN OurCase-Container-module--cls1--2MZpC"
            >
              <div className="OurCase-Image-module--cls2--2XuQ0 OurCase-Image-module--cls1--1HAll">
                <div className="gatsby-image-wrapper position-image">
                  <div
                    aria-hidden="true"
                    style={{ width: "100%", paddingBottom: "108%" }}
                  ></div>
                  <img
                    className="img"
                    aria-hidden="true"
                    src="data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAWABQDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAQFAQID/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgMB/9oADAMBAAIQAxAAAAGrWeaCrT25O0JU7hH/xAAcEAACAgIDAAAAAAAAAAAAAAABAgMEABIQESP/2gAIAQEAAQUC5pw7ZoqsarHD3Eqp6TWRC/8A/8QAFhEBAQEAAAAAAAAAAAAAAAAAEQAQ/9oACAEDAQE/ASMb/8QAFxEBAQEBAAAAAAAAAAAAAAAAABESQf/aAAgBAgEBPwHSuo//xAAfEAABBAICAwAAAAAAAAAAAAABAAIRIRJBAxAiMVH/2gAIAQEABj8C7L3CtI4AXp3xS2AD6CHHPid7QZMtddrHGV//xAAbEAEBAQEBAAMAAAAAAAAAAAABEQAhMUFhgf/aAAgBAQABPyG664CA+A5QpP1fRzc+kj0NFKsHgB7lKtU/CPmKJcXm/9oADAMBAAIAAwAAABAg3z3/xAAXEQEBAQEAAAAAAAAAAAAAAAABABEh/9oACAEDAQE/EBtqzkrb/8QAGBEBAQEBAQAAAAAAAAAAAAAAAQARIWH/2gAIAQIBAT8QQWbXjyAl/8QAHhABAQADAAEFAAAAAAAAAAAAAREAITFREHGRwdH/2gAIAQEAAT8Q9RPMkmj5fr5wefLtgG1OcX2mdaDnVwddmMiHEIyjWlR06wTmqVQAh8KlkIcxg0m0HV/M/9k="
                    alt="Мобильное приложение получило награды Международное Social Media и Лучшее приложение Медиа / СМИ"
                  />
                </div>
              </div>
              <div className="OurCase-SubImage-module--cls2--JE2nq OurCase-SubImage-module--cls1--1oK5I">
                <div className="gatsby-image-wrapper position-image">
                  <div
                    aria-hidden="true"
                    style={{ width: "100%", paddingBottom: "108%" }}
                  ></div>
                  <img
                    className="img"
                    aria-hidden="true"
                    src="data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAWABQDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAQFAQID/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgMB/9oADAMBAAIQAxAAAAGrWeaCrT25O0JU7hH/xAAcEAACAgIDAAAAAAAAAAAAAAABAgMEABIQESP/2gAIAQEAAQUC5pw7ZoqsarHD3Eqp6TWRC/8A/8QAFhEBAQEAAAAAAAAAAAAAAAAAEQAQ/9oACAEDAQE/ASMb/8QAFxEBAQEBAAAAAAAAAAAAAAAAABESQf/aAAgBAgEBPwHSuo//xAAfEAABBAICAwAAAAAAAAAAAAABAAIRIRJBAxAiMVH/2gAIAQEABj8C7L3CtI4AXp3xS2AD6CHHPid7QZMtddrHGV//xAAbEAEBAQEBAAMAAAAAAAAAAAABEQAhMUFhgf/aAAgBAQABPyG664CA+A5QpP1fRzc+kj0NFKsHgB7lKtU/CPmKJcXm/9oADAMBAAIAAwAAABAg3z3/xAAXEQEBAQEAAAAAAAAAAAAAAAABABEh/9oACAEDAQE/EBtqzkrb/8QAGBEBAQEBAQAAAAAAAAAAAAAAAQARIWH/2gAIAQIBAT8QQWbXjyAl/8QAHhABAQADAAEFAAAAAAAAAAAAAREAITFREHGRwdH/2gAIAQEAAT8Q9RPMkmj5fr5wefLtgG1OcX2mdaDnVwddmMiHEIyjWlR06wTmqVQAh8KlkIcxg0m0HV/M/9k="
                    alt="Мобильное приложение получило награды Международное Social Media и Лучшее приложение Медиа / СМИ"
                  />
                </div>
              </div>
              <div className="OurCase-TextContainer-module--cls2--1V8FK OurCase-TextContainer-module--cls1--HzZ36">
                <span className="OurCase-Title-module--cls2--D696E OurCase-Title-module--cls1--cDbok">
                  СМИ для лиги BIG3
                </span>
                <span className="OurCase-Text-module--cls2--2Sjya OurCase-Text-module--cls1--1gpVJ">
                  Мобильное приложение получило награды Международное Social
                  Media и Лучшее приложение Медиа / СМИ
                </span>
              </div>
            </a> */}
          </div>
          <a
            href="/Ru/Page/InDevelopment"
            aria-label="Dex"
            className="OurCases-MoreCases-module--cls2--2_V1z OurCases-MoreCases-module--cls1--PlPfy"
          >
            <div>More cases</div>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCA1MSAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik00MSAxTDQ5IDlMNDEgMTciIHN0cm9rZT0iIzI2NjlDQyIgc3Ryb2tlLXdpZHRoPSIyIi8+DQo8cGF0aCBkPSJNNDguNSA5SDAuNSIgc3Ryb2tlPSIjMjY2OUNDIiBzdHJva2Utd2lkdGg9IjIiLz4NCjwvc3ZnPg0K"
              alt="Больше кейсов"
              className="OurCases-MoreCasesIcon-module--cls2--fdyV8 OurCases-MoreCasesIcon-module--cls1--3H5Pg"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurCases;
