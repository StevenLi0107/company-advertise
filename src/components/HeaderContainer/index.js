import React from "react";

const HeaderContainer = ({ scrollToElement }) => {
  return (
    <div className="HeaderVideo-Container-module--cls2--1tf72 HeaderVideo-Container-module--cls1--LiG7J">
      <div className="HeaderVideo-TextContainer-module--cls2--p_n47 HeaderVideo-TextContainer-module--cls1--f5A-C">
        <div className="WidthContainer-OuterContainer-module--cls2--2akaW WidthContainer-OuterContainer-module--cls1--1qDQ4">
          <div className="WidthContainer-InnerContainer-module--cls2--32dv6 WidthContainer-InnerContainer-module--cls1--1Ms9D">
            <div className="HeaderVideo-Content-module--cls2--3oAQo HeaderVideo-Content-module--cls1--egqd9">
              <h1 className="HeaderVideo-Title-module--cls2--2wzlm HeaderVideo-Title-module--cls1--JyoI9">
                Crossplatform
                <br />
                mobile development
              </h1>
              <h2 className="HeaderVideo-SubTitle-module--cls2--jtKtQ HeaderVideo-SubTitle-module--cls1--3gq7t">
                We will spare you from all design issues, development and
                maintenance
                <br />
                of a mobile application
              </h2>
              <a
                onClick={scrollToElement}
                id="contactUs"
                className="Buttons-BigWhiteButton-module--cls2--g05zN Buttons-BigWhiteButton-module--cls1--2H7YS"
              >
                Leave a request
              </a>
            </div>
          </div>
        </div>
        <div className="WidthContainer-OuterContainer-module--cls2--2akaW WidthContainer-OuterContainer-module--cls1--1qDQ4">
          <div className="WidthContainer-InnerContainer-module--cls2--32dv6 WidthContainer-InnerContainer-module--cls1--1Ms9D">
            <div className="HeaderVideo-ContentSecondPart-module--cls2--3dPze HeaderVideo-ContentSecondPart-module--cls1--1Uj6j">
              <div className="HeaderVideo-RatingsRow-module--cls2--yLL7j HeaderVideo-RatingsRow-module--cls1--2K50O">
                <div style={{ height: 104 }}></div>
                {/* <img
                    src="/static/rating-developers-108c9458fdd28012cdcd1d93570c0aa0.svg"
                    alt="рейтинг мобильных разработчиков"
                    className="HeaderVideo-RatingDevelopersImage-module--cls2--zZC5K HeaderVideo-RatingDevelopersImage-module--cls1--hIYUv"
                  />
                  <img
                    src="/static/rating-autsorsers-0d51b9bcbf264b703d5b7524241686a6.svg"
                    alt="рейтинг аутсорсеров"
                    className="HeaderVideo-RatingAutsorsersImage-module--cls2--3KqqR HeaderVideo-RatingAutsorsersImage-module--cls1--2N7km"
                  /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderContainer;
