import React from "react";

const MainHeader = ({ scrollToElement }) => {
  const [scrollPosition, setScrollPosition] = React.useState(false);

  const handleScroll = React.useCallback(() => {
    if (window.pageYOffset > 0) return setScrollPosition(true);
    setScrollPosition(false);
  }, []);
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="header_hor l-body state_defaul no-touch">
      <header
        className={`Header-HeaderContainer-module--cls2--DMSkf Header-HeaderContainer-module--cls1--1ngcV ${
          scrollPosition ? "Header-HeaderContainer-module--sticky--13mcK" : ""
        }`}
      >
        <div
          className={`SubHeader-Container-module--cls2--2PLta SubHeader-Container-module--cls1--MaurO ${
            scrollPosition ? "SubHeader-Container-module--sticky--13Cst" : ""
          }`}
        >
          <div className="container SubHeader-ContainerContent-module--cls2--3QP34 SubHeader-ContainerContent-module--cls1--3p7SF">
            <div className="SubHeader-LeftBlock-module--cls2--76WXv SubHeader-LeftBlock-module--cls1--2hkJC">
              <a
                href="tel:+74993481107"
                className="SubHeader-Link-module--cls2--goBAf SubHeader-Link-module--cls1--5MFMz"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 513.64 513.64"
                  height="14"
                  width="11"
                >
                  <g>
                    <g>
                      <path
                        d="M499.66,376.96l-71.68-71.68c-25.6-25.6-69.12-15.359-79.36,17.92c-7.68,23.041-33.28,35.841-56.32,30.72
c-51.2-12.8-120.32-79.36-133.12-133.12c-7.68-23.041,7.68-48.641,30.72-56.32c33.28-10.24,43.52-53.76,17.92-79.36l-71.68-71.68
c-20.48-17.92-51.2-17.92-69.12,0l-48.64,48.64c-48.64,51.2,5.12,186.88,125.44,307.2c120.32,120.32,256,176.641,307.2,125.44
l48.64-48.64C517.581,425.6,517.581,394.88,499.66,376.96z"
                      ></path>
                    </g>
                  </g>
                </svg>
                +7 499 348 1107
              </a>
              <a
                href="mailto:office@dex-it.ru"
                className="SubHeader-Link-module--cls2--goBAf SubHeader-Link-module--cls1--5MFMz"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  height="14"
                  width="14"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M10.688,95.156C80.958,154.667,204.26,259.365,240.5,292.01c4.865,4.406,10.083,6.646,15.5,6.646
 c5.406,0,10.615-2.219,15.469-6.604c36.271-32.677,159.573-137.385,229.844-196.896c4.375-3.698,5.042-10.198,1.5-14.719
 C494.625,69.99,482.417,64,469.333,64H42.667c-13.083,0-25.292,5.99-33.479,16.438C5.646,84.958,6.313,91.458,10.688,95.156z"
                  ></path>
                  <path
                    d="M505.813,127.406c-3.781-1.76-8.229-1.146-11.375,1.542C416.51,195.01,317.052,279.688,285.76,307.885
 c-17.563,15.854-41.938,15.854-59.542-0.021c-33.354-30.052-145.042-125-208.656-178.917c-3.167-2.688-7.625-3.281-11.375-1.542
 C2.417,129.156,0,132.927,0,137.083v268.25C0,428.865,19.135,448,42.667,448h426.667C492.865,448,512,428.865,512,405.333
 v-268.25C512,132.927,509.583,129.146,505.813,127.406z"
                  ></path>
                </svg>
                office@dex-it.ru
              </a>
            </div>
            <div className="SubHeader-RightBlock-module--cls2--2Rt0p SubHeader-RightBlock-module--cls1--y2RM1">
              <a
                target="_blank"
                href="http://www.facebook.com/dextechnology"
                rel="noopener noreferrer"
                aria-label="facebook"
                className="SubHeader-SocialLink-module--cls2--3FfVE SubHeader-SocialLink-module--cls1--2jecf SubHeader-SocialLink-module--i-facebook--1M9is"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="16px"
                  height="16px"
                  viewBox="0 0 96.124 96.123"
                >
                  <path
                    fill="#ffffff"
                    d="M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803
 c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654
 c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246
 c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z"
                  ></path>
                </svg>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/dex.it/"
                rel="noopener noreferrer"
                aria-label="instagram"
                className="SubHeader-SocialLink-module--cls2--3FfVE SubHeader-SocialLink-module--cls1--2jecf SubHeader-SocialLink-module--i-instagram--3U5J3"
              >
                <svg
                  viewBox="0 0 511 511.9"
                  height="20px"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#fff"
                    d="m510.949219 150.5c-1.199219-27.199219-5.597657-45.898438-11.898438-62.101562-6.5-17.199219-16.5-32.597657-29.601562-45.398438-12.800781-13-28.300781-23.101562-45.300781-29.5-16.296876-6.300781-34.898438-10.699219-62.097657-11.898438-27.402343-1.300781-36.101562-1.601562-105.601562-1.601562s-78.199219.300781-105.5 1.5c-27.199219 1.199219-45.898438 5.601562-62.097657 11.898438-17.203124 6.5-32.601562 16.5-45.402343 29.601562-13 12.800781-23.097657 28.300781-29.5 45.300781-6.300781 16.300781-10.699219 34.898438-11.898438 62.097657-1.300781 27.402343-1.601562 36.101562-1.601562 105.601562s.300781 78.199219 1.5 105.5c1.199219 27.199219 5.601562 45.898438 11.902343 62.101562 6.5 17.199219 16.597657 32.597657 29.597657 45.398438 12.800781 13 28.300781 23.101562 45.300781 29.5 16.300781 6.300781 34.898438 10.699219 62.101562 11.898438 27.296876 1.203124 36 1.5 105.5 1.5s78.199219-.296876 105.5-1.5c27.199219-1.199219 45.898438-5.597657 62.097657-11.898438 34.402343-13.300781 61.601562-40.5 74.902343-74.898438 6.296876-16.300781 10.699219-34.902343 11.898438-62.101562 1.199219-27.300781 1.5-36 1.5-105.5s-.101562-78.199219-1.300781-105.5zm-46.097657 209c-1.101562 25-5.300781 38.5-8.800781 47.5-8.601562 22.300781-26.300781 40-48.601562 48.601562-9 3.5-22.597657 7.699219-47.5 8.796876-27 1.203124-35.097657 1.5-103.398438 1.5s-76.5-.296876-103.402343-1.5c-25-1.097657-38.5-5.296876-47.5-8.796876-11.097657-4.101562-21.199219-10.601562-29.398438-19.101562-8.5-8.300781-15-18.300781-19.101562-29.398438-3.5-9-7.699219-22.601562-8.796876-47.5-1.203124-27-1.5-35.101562-1.5-103.402343s.296876-76.5 1.5-103.398438c1.097657-25 5.296876-38.5 8.796876-47.5 4.101562-11.101562 10.601562-21.199219 19.203124-29.402343 8.296876-8.5 18.296876-15 29.398438-19.097657 9-3.5 22.601562-7.699219 47.5-8.800781 27-1.199219 35.101562-1.5 103.398438-1.5 68.402343 0 76.5.300781 103.402343 1.5 25 1.101562 38.5 5.300781 47.5 8.800781 11.097657 4.097657 21.199219 10.597657 29.398438 19.097657 8.5 8.300781 15 18.300781 19.101562 29.402343 3.5 9 7.699219 22.597657 8.800781 47.5 1.199219 27 1.5 35.097657 1.5 103.398438s-.300781 76.300781-1.5 103.300781zm0 0"
                  ></path>
                  <path
                    fill="#fff"
                    d="m256.449219 124.5c-72.597657 0-131.5 58.898438-131.5 131.5s58.902343 131.5 131.5 131.5c72.601562 0 131.5-58.898438 131.5-131.5s-58.898438-131.5-131.5-131.5zm0 216.800781c-47.097657 0-85.300781-38.199219-85.300781-85.300781s38.203124-85.300781 85.300781-85.300781c47.101562 0 85.300781 38.199219 85.300781 85.300781s-38.199219 85.300781-85.300781 85.300781zm0 0"
                  ></path>
                  <path
                    fill="#fff"
                    d="m423.851562 119.300781c0 16.953125-13.746093 30.699219-30.703124 30.699219-16.953126 0-30.699219-13.746094-30.699219-30.699219 0-16.957031 13.746093-30.699219 30.699219-30.699219 16.957031 0 30.703124 13.742188 30.703124 30.699219zm0 0"
                  ></path>
                </svg>
              </a>
              <a
                target="_blank"
                href="http://www.linkedin.com/company/dextechnology"
                rel="noopener noreferrer"
                aria-label="linkedin"
                className="SubHeader-SocialLink-module--cls2--3FfVE SubHeader-SocialLink-module--cls1--2jecf SubHeader-SocialLink-module--i-linkedin--2ZH1x"
              >
                <svg
                  viewBox="0 0 24 24"
                  height="17px"
                  width="17px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#fff"
                    d="m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z"
                  ></path>
                  <path fill="#fff" d="m.396 7.977h4.976v16.023h-4.976z"></path>
                  <path
                    fill="#fff"
                    d="m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z"
                  ></path>
                </svg>
              </a>
              <a
                target="_blank"
                href="https://vk.com/dextechnology"
                aria-label="vk"
                rel="noopener noreferrer"
                className="SubHeader-SocialLink-module--cls2--3FfVE SubHeader-SocialLink-module--cls1--2jecf SubHeader-SocialLink-module--i-vk--13VwK"
              >
                <svg
                  viewBox="0 0 24 24"
                  height="20px"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#fff"
                    d="m19.915 13.028c-.388-.49-.277-.708 0-1.146.005-.005 3.208-4.431 3.538-5.932l.002-.001c.164-.547 0-.949-.793-.949h-2.624c-.668 0-.976.345-1.141.731 0 0-1.336 3.198-3.226 5.271-.61.599-.892.791-1.225.791-.164 0-.419-.192-.419-.739v-5.105c0-.656-.187-.949-.74-.949h-4.126c-.419 0-.668.306-.668.591 0 .622.945.765 1.043 2.515v3.797c0 .832-.151.985-.486.985-.892 0-3.057-3.211-4.34-6.886-.259-.713-.512-1.001-1.185-1.001h-2.625c-.749 0-.9.345-.9.731 0 .682.892 4.073 4.148 8.553 2.17 3.058 5.226 4.715 8.006 4.715 1.671 0 1.875-.368 1.875-1.001 0-2.922-.151-3.198.686-3.198.388 0 1.056.192 2.616 1.667 1.783 1.749 2.076 2.532 3.074 2.532h2.624c.748 0 1.127-.368.909-1.094-.499-1.527-3.871-4.668-4.023-4.878z"
                  ></path>
                </svg>
              </a>
              <a
                target="_blank"
                href="skype:vvvcsq3?call"
                rel="noopener noreferrer"
                aria-label="skype"
                className="SubHeader-SocialLink-module--cls2--3FfVE SubHeader-SocialLink-module--cls1--2jecf SubHeader-SocialLink-module--i-skype--2md0F"
              >
                <svg
                  viewBox="0 0 24 24"
                  height="16px"
                  width="16px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#fff"
                    d="m23.309 14.547c1.738-7.81-5.104-14.905-13.139-13.543-4.362-2.707-10.17.352-10.17 5.542 0 1.207.333 2.337.912 3.311-1.615 7.828 5.283 14.821 13.311 13.366 5.675 3.001 11.946-2.984 9.086-8.676zm-7.638 4.71c-2.108.867-5.577.872-7.676-.227-2.993-1.596-3.525-5.189-.943-5.189 1.946 0 1.33 2.269 3.295 3.194.902.417 2.841.46 3.968-.3 1.113-.745 1.011-1.917.406-2.477-1.603-1.48-6.19-.892-8.287-3.483-.911-1.124-1.083-3.107.037-4.545 1.952-2.512 7.68-2.665 10.143-.768 2.274 1.76 1.66 4.096-.175 4.096-2.207 0-1.047-2.888-4.61-2.888-2.583 0-3.599 1.837-1.78 2.731 2.466 1.225 8.75.816 8.75 5.603-.005 1.992-1.226 3.477-3.128 4.253z"
                  ></path>
                </svg>
              </a>
              <a
                target="_blank"
                href="https://t.me/Dexitru"
                rel="noopener noreferrer"
                aria-label="telegram"
                className="SubHeader-SocialLink-module--cls2--3FfVE SubHeader-SocialLink-module--cls1--2jecf SubHeader-SocialLink-module--i-telegram--3oQ6-"
              >
                <svg viewBox="0 0 32 32" height="40px" width="40px">
                  <path
                    d="m16 24c4.419 0 8-3.581 8-8s-3.581-8-8-8-8 3.581-8 8 3.581 8 8 8zm-4.34-8.173 7.713-2.974c.358-.129.671.087.555.629l.001-.001-1.313 6.187c-.097.438-.358.545-.723.339l-2-1.474-.965.929c-.107.107-.197.197-.403.197l.142-2.036 3.707-3.349c.161-.142-.036-.222-.248-.081l-4.581 2.884-1.974-.616c-.43-.135-.439-.428.089-.634z"
                    fill="#ffffff"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div
          className={`HeaderLink-Container-module--cls2--1gZrW HeaderLink-Container-module--cls1--2WEYu ${
            scrollPosition ? "HeaderLink-Container-module--sticky--3ScyY" : ""
          }`}
        >
          <div className="container HeaderLink-ContentContainer-module--cls2--1C9Uc HeaderLink-ContentContainer-module--cls1--1E_0-">
            <a
              href="/"
              aria-label="Dex"
              className={`HeaderLink-DexLogo-module--cls2--1KCYS HeaderLink-DexLogo-module--cls1--NPNfe ${
                scrollPosition ? "HeaderLink-DexLogo-module--sticky--1Bbay" : ""
              }`}
            >
              <svg
                id="svg-logo"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 795.378 331.585"
                width="109px"
                height="60px"
              >
                <g id="dexlogowhite" transform="translate(-103)">
                  <path
                    fill="#fff"
                    d="M284.014,114.955V0h70.07V325.36h-70.07V303.365c-16.266,19.09-39.206,28.22-69.653,28.22-30.864,0-57.14-11.62-78.829-35.275S103,243.6,103,208.745q0-51.667,32.532-87.15c22.106-24.07,48.382-35.69,78.829-35.69C244.391,86.32,267.748,95.865,284.014,114.955ZM172.653,209.16c0,17.43,5.005,31.125,15.432,41.5s23.774,15.355,40.04,15.355,30.03-4.98,40.04-15.355c10.427-10.375,15.432-24.07,15.432-41.5s-5-31.125-15.432-41.5S244.391,152.3,228.125,152.3s-30.03,4.98-40.04,15.355C177.658,178.035,172.653,191.73,172.653,209.16Z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M633.947,236.965h-166c7.925,21.58,26.277,32.37,55.889,32.37,19.186,0,33.784-5.81,45.045-17.845l55.89,31.955C601.832,315.4,568.048,331.17,523,331.17c-38.788,0-70.487-11.62-94.26-34.86-23.357-23.24-35.035-52.705-35.035-87.98,0-34.86,11.678-63.91,34.617-87.565C451.682,97.11,481.712,85.49,518,85.49c33.784,0,62.146,11.62,84.668,35.275,22.94,22.825,34.2,51.875,34.2,87.565A144.2,144.2,0,0,1,633.947,236.965ZM466.7,185.09H567.214c-6.673-24.485-23.357-36.935-49.633-36.935C490.471,148.155,473.37,160.6,466.7,185.09Z"
                  ></path>
                  <path
                    fill="#fc336f"
                    d="M774.5,154.38H855l43.377-61.42h-80.5Z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M895.458,325.36h-80.5L774.5,267.675,734.047,325.36h-80.5l80.915-114.125L650.63,92.96h80.5L774.5,154.38l40.04,56.855Z"
                  ></path>
                </g>
              </svg>
            </a>
            <div className="HeaderLink-RightContainer-module--cls2--GsD5t HeaderLink-RightContainer-module--cls1--1pFNp">
              <nav className="HeaderLink-LinkContainer-module--cls2--3driM HeaderLink-LinkContainer-module--cls1--1eSmk HeaderLink-LinkContainer-module--hide--2t9x1">
                <a
                  href="/developers"
                  onClick={scrollToElement}
                  id="main"
                  className="HeaderLink-Link-module--cls2--vzGtU HeaderLink-Link-module--cls1--McJKF HeaderLink-Link-module--active--3vJNl"
                >
                  Главная
                </a>
                <a
                  href="/developers"
                  onClick={scrollToElement}
                  id="portfolio"
                  className="HeaderLink-Link-module--cls2--vzGtU HeaderLink-Link-module--cls1--McJKF"
                >
                  Портфолио
                </a>
                <a
                  href="/developers"
                  className="HeaderLink-Link-module--cls2--vzGtU HeaderLink-Link-module--cls1--McJKF"
                >
                  Разработчики
                </a>
              </nav>
              <span>
                <div className="HeaderLink-IconBurger-module--cls2--1k4-B HeaderLink-IconBurger-module--cls1--1fSrp"></div>
              </span>
              <a
                href="/developers"
                onClick={scrollToElement}
                id="contactUs"
                className="HeaderLink-WhiteButton-module--cls2--1a7Fg HeaderLink-WhiteButton-module--cls1--2kzxS"
              >
                Оставить заявку
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default MainHeader;
