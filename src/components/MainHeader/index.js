import React from "react";

const MainHeader = ({ scrollToElement, isActiveDevelopersSection }) => {
  const [scrollPosition, setScrollPosition] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = React.useCallback(() => {
    if (window.pageYOffset > 0) return setScrollPosition(true);
    setScrollPosition(false);
  }, []);
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
                href="mailto:mail.cowork.dev@gmail.com"
                className="SubHeader-Link-module--cls2--goBAf SubHeader-Link-module--cls1--5MFMz"
                style={{ zIndex: 100 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  height="14"
                  width="14"
                  viewBox="0 0 512 512"
                >
                  <path d="M10.688,95.156C80.958,154.667,204.26,259.365,240.5,292.01c4.865,4.406,10.083,6.646,15.5,6.646  c5.406,0,10.615-2.219,15.469-6.604c36.271-32.677,159.573-137.385,229.844-196.896c4.375-3.698,5.042-10.198,1.5-14.719  C494.625,69.99,482.417,64,469.333,64H42.667c-13.083,0-25.292,5.99-33.479,16.438C5.646,84.958,6.313,91.458,10.688,95.156z"></path>
                  <path d="M505.813,127.406c-3.781-1.76-8.229-1.146-11.375,1.542C416.51,195.01,317.052,279.688,285.76,307.885  c-17.563,15.854-41.938,15.854-59.542-0.021c-33.354-30.052-145.042-125-208.656-178.917c-3.167-2.688-7.625-3.281-11.375-1.542  C2.417,129.156,0,132.927,0,137.083v268.25C0,428.865,19.135,448,42.667,448h426.667C492.865,448,512,428.865,512,405.333  v-268.25C512,132.927,509.583,129.146,505.813,127.406z"></path>
                </svg>
                contact@cowork.dev
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
                    d="M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803  c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654  c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246  c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z"
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
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="476.000000pt"
                height="98.000000pt"
                viewBox="0 0 476.000000 98.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <metadata>
                  Created by potrace 1.16, written by Peter Selinger 2001-2019
                </metadata>
                <g
                  transform="translate(0.000000,98.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none"
                >
                  <path
                    fill="#E37B00"
                    d="M307 850 c-106 -27 -194 -111 -227 -217 -40 -130 -19 -304 46 -391
40 -52 61 -69 124 -100 48 -24 67 -27 150 -27 81 0 103 4 150 26 92 43 152
118 166 208 l7 41 -79 0 -79 -1 -25 -52 c-21 -44 -32 -55 -71 -71 -68 -27
-129 -16 -177 32 -45 45 -62 97 -62 189 0 116 33 182 108 215 82 37 168 6 205
-74 l22 -47 78 -1 c89 0 91 2 57 92 -24 65 -86 129 -154 159 -55 24 -179 34
-239 19z"
                  />
                  <path
                    fill="#fff"
                    d="M1340 844 c0 -7 152 -587 177 -671 l14 -53 78 0 78 0 58 213 c32 116
61 218 65 225 3 7 33 -88 67 -210 l60 -223 79 -3 80 -3 93 353 c52 194 96 359
98 366 4 9 -16 12 -80 12 l-86 0 -9 -32 c-5 -18 -28 -124 -53 -235 -24 -112
-46 -203 -49 -203 -3 0 -32 105 -65 233 l-60 232 -72 3 c-40 2 -73 1 -73 -2 0
-10 -119 -468 -123 -472 -2 -2 -20 74 -41 169 -21 94 -45 202 -53 240 l-15 67
-84 0 c-46 0 -84 -3 -84 -6z"
                  />
                  <path
                    fill="#fff"
                    d="M3290 485 l0 -365 80 0 80 0 0 94 c0 138 10 139 100 11 l73 -105 88
0 c49 0 89 3 89 6 0 4 -45 71 -100 150 -55 79 -100 148 -100 152 0 4 43 56 95
116 52 60 95 112 95 115 0 3 -39 5 -87 4 l-88 -1 -82 -97 -83 -97 0 191 0 191
-80 0 -80 0 0 -365z"
                  />
                  <path
                    fill="#E37B00"
                    d="M983 669 c-145 -27 -221 -138 -211 -304 11 -170 129 -269 299 -251
74 7 127 34 171 86 81 94 87 259 15 367 -53 79 -169 122 -274 102z m92 -133
c46 -19 66 -63 66 -139 0 -75 -11 -108 -47 -136 -31 -25 -64 -27 -103 -6 -38
19 -56 67 -56 147 0 72 19 111 66 135 30 16 33 16 74 -1z"
                  />
                  <path
                    fill="#fff"
                    d="M2533 669 c-145 -27 -221 -138 -211 -304 11 -170 129 -269 299 -251
74 7 127 34 171 86 81 94 87 259 15 367 -53 79 -169 122 -274 102z m92 -133
c47 -20 65 -60 65 -144 0 -55 -5 -76 -23 -103 -54 -81 -150 -58 -178 43 -23
85 5 176 62 205 30 16 33 16 74 -1z"
                  />
                  <path
                    fill="#fff"
                    d="M3145 665 c-21 -8 -47 -24 -57 -37 l-18 -23 0 28 0 27 -77 0 -78 0 3
-270 3 -271 77 3 77 3 5 183 c5 178 6 184 29 203 24 20 43 23 99 20 l32 -3 0
71 c0 55 -3 71 -14 71 -8 0 -20 2 -28 5 -7 2 -31 -2 -53 -10z"
                  />
                  <path
                    fill="#E37B00"
                    d="M4146 442 c-3 -5 -8 -28 -12 -50 -4 -23 -8 -42 -9 -42 -1 0 -16 7
-34 16 -56 28 -114 -3 -146 -79 -23 -54 -19 -100 10 -136 25 -29 28 -30 113
-30 l87 0 36 165 35 164 -37 0 c-21 0 -40 -4 -43 -8z m-58 -144 c17 -17 15
-68 -5 -90 -20 -22 -59 -24 -67 -2 -11 28 -6 51 15 78 22 28 39 32 57 14z"
                  />
                  <path
                    fill="#E37B00"
                    d="M4284 366 c-92 -41 -111 -197 -28 -235 70 -31 174 9 174 68 0 17 -66
13 -80 -4 -15 -18 -42 -19 -58 -3 -22 22 -13 26 68 33 l80 7 0 34 c0 48 -18
81 -55 99 -40 18 -60 18 -101 1z m84 -73 c2 -9 -9 -13 -37 -13 -39 0 -55 13
-28 24 21 8 60 2 65 -11z"
                  />
                  <path
                    fill="#E37B00"
                    d="M4469 248 l16 -123 41 -3 42 -3 66 121 c36 67 66 123 66 126 0 2 -18
4 -40 4 -39 0 -40 -1 -77 -72 -34 -67 -38 -71 -40 -43 -11 115 -11 115 -52
115 l-37 0 15 -122z"
                  />
                  <path
                    fill="#E37B00"
                    d="M3826 194 c-34 -33 -8 -82 38 -70 31 8 40 33 21 62 -18 28 -37 30
-59 8z"
                  />
                </g>
              </svg>

              {/* <svg
                width="894"
                height="300"
                viewBox="0 0 894 358"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_7:3)">
                  {/* <rect width="894" height="358" rx="10" fill="white" />
                  <g filter="url(#filter0_d_7:3)">
                    <rect width="894" height="358" rx="10" fill="#192239" />
                  </g> 
                  <path
                    d="M178.07 231.758C202.68 231.758 220.469 216.359 222.367 194.773L222.438 194H201.766L201.625 194.703C198.953 206.727 190.375 213.758 178.141 213.758C161.898 213.758 151.492 200.539 151.492 179.164V179.094C151.492 157.859 161.828 144.781 178.07 144.781C190.727 144.781 199.023 152.094 201.414 163.273L201.695 164.469H222.367L222.297 163.836C220.398 142.32 202.75 126.781 178.07 126.781C148.469 126.781 129.766 146.469 129.766 179.164V179.234C129.766 211.93 148.398 231.758 178.07 231.758ZM268.914 231.547C291.695 231.547 306.25 216.922 306.25 192.312V192.172C306.25 167.773 291.414 153.078 268.844 153.078C246.344 153.078 231.578 167.914 231.578 192.172V192.312C231.578 216.852 245.992 231.547 268.914 231.547ZM268.984 215.445C258.859 215.445 252.461 207.078 252.461 192.312V192.172C252.461 177.617 258.93 169.18 268.844 169.18C278.828 169.18 285.367 177.617 285.367 192.172V192.312C285.367 207.008 278.969 215.445 268.984 215.445Z"
                    fill="#E37B00"
                  />
                  <path
                    d="M340.07 230H360.812L379.516 162.008H379.938L398.57 230H419.312L446.242 128.539H424.234L408.133 201.242H407.711L389.008 128.539H370.375L351.672 201.242H351.25L335.219 128.539H313.211L340.07 230ZM490.539 231.547C513.32 231.547 527.875 216.922 527.875 192.312V192.172C527.875 167.773 513.039 153.078 490.469 153.078C467.969 153.078 453.203 167.914 453.203 192.172V192.312C453.203 216.852 467.617 231.547 490.539 231.547ZM490.609 215.445C480.484 215.445 474.086 207.078 474.086 192.312V192.172C474.086 177.617 480.555 169.18 490.469 169.18C500.453 169.18 506.992 177.617 506.992 192.172V192.312C506.992 207.008 500.594 215.445 490.609 215.445ZM538.492 230H559.023V187.531C559.023 176.914 564.93 170.797 575.055 170.797C578.008 170.797 580.82 171.219 582.508 171.922V153.852C580.961 153.43 578.852 153.078 576.602 153.078C567.672 153.078 561.273 158.352 559.094 167.492H558.672V154.625H538.492V230ZM591.648 230H612.18V205.039L617.453 199.203L639.039 230H662.734L632.852 187.039L661.328 154.625H638.055L612.602 184.789H612.18V128.539H591.648V230Z"
                    fill="white"
                  />
                  <path
                    d="M671.344 230.375C674.156 230.375 676.375 228.094 676.375 225.188C676.375 222.312 674.156 220.031 671.344 220.031C668.562 220.031 666.312 222.312 666.312 225.188C666.312 228.094 668.562 230.375 671.344 230.375ZM695.375 230.531C699.812 230.531 703.594 228.438 705.844 225H706.031L704.969 230H713.75L723.344 184.906H714.438L710.625 202.438H710.438C709.344 198.562 705.438 195.875 700.344 195.875C690.812 195.875 683.594 204.906 683.594 217.031C683.594 225.281 688.125 230.531 695.375 230.531ZM699.062 223.188C695.156 223.188 692.719 220.281 692.719 215.75C692.719 208.656 696.719 203.375 701.875 203.375C705.875 203.375 708.469 206.344 708.469 210.656C708.469 217.625 704.344 223.188 699.062 223.188ZM737.25 230.75C745.344 230.75 751.469 226 753.188 219.312H744.781C743.75 222 741.156 223.812 737.594 223.812C733.344 223.812 730.688 220.75 730.688 216.312C730.688 215.969 730.719 215.625 730.75 215.25H754.188C754.531 213.656 754.656 211.656 754.656 210.031C754.656 201.25 748.906 195.656 740.25 195.656C729.656 195.656 722.406 204.312 722.406 215.625C722.406 224.812 727.906 230.75 737.25 230.75ZM731.656 209.594C732.719 205.5 735.781 202.5 739.938 202.5C744.156 202.5 746.281 205.344 746.281 208.656C746.281 208.969 746.25 209.375 746.219 209.594H731.656ZM758.5 196.375L762.719 230H772.906L791.438 196.375H781.844L769.531 221.406H769.344L767.406 196.375H758.5Z"
                    fill="#E37B00"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_7:3"
                    x="-4"
                    y="0"
                    width="902"
                    height="366"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_7:3"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_7:3"
                      result="shape"
                    />
                  </filter>
                  <clipPath id="clip0_7:3">
                    <rect width="894" height="358" rx="10" fill="white" />
                  </clipPath>
                </defs>
              </svg> */}
            </a>
            <div className="HeaderLink-RightContainer-module--cls2--GsD5t HeaderLink-RightContainer-module--cls1--1pFNp">
              <nav className="HeaderLink-LinkContainer-module--cls2--3driM HeaderLink-LinkContainer-module--cls1--1eSmk HeaderLink-LinkContainer-module--hide--2t9x1">
                <a
                  onClick={scrollToElement}
                  id="main"
                  className="HeaderLink-Link-module--cls2--vzGtU HeaderLink-Link-module--cls1--McJKF HeaderLink-Link-module--active--3vJNl"
                >
                  Main
                </a>
                <a
                  onClick={scrollToElement}
                  id="portfolio"
                  className="HeaderLink-Link-module--cls2--vzGtU HeaderLink-Link-module--cls1--McJKF"
                >
                  Portfolio
                </a>
                {isActiveDevelopersSection && (
                  <a
                    href="/developers"
                    className="HeaderLink-Link-module--cls2--vzGtU HeaderLink-Link-module--cls1--McJKF"
                  >
                    Developers
                  </a>
                )}
              </nav>
              <span>
                <div className="HeaderLink-IconBurger-module--cls2--1k4-B HeaderLink-IconBurger-module--cls1--1fSrp"></div>
              </span>
              <a
                onClick={scrollToElement}
                id="contactUs"
                className="HeaderLink-WhiteButton-module--cls2--1a7Fg HeaderLink-WhiteButton-module--cls1--2kzxS"
              >
                Leave a request
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default MainHeader;
