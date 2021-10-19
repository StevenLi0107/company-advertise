/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

import { contactUs } from "../../redux/actions/formsActions";
import { getBase64 } from "../../utils/base64";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "../../utils/stringUtils";
import Loader from "./Loader";

const buttonText = [
  "Mobile",
  "Web",
  "Backend",
  "Design",
  "Analytics",
  "Testing",
];
const initForm = {
  companyName: {
    text: "",
    error: false,
  },
  email: {
    text: "",
    error: false,
  },
  phoneNumber: {
    text: "",
    error: false,
  },
  projectDetails: {
    text: "",
    error: false,
  },
  attachment: {
    name: "",
    body: "",
  },
};

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ContactUs = ({ ref }) => {
  const [activeButtons, setActiveButtons] = React.useState([]);
  const [activeInputs, setActiveInputs] = React.useState([]);
  const [attachFile, setAttachFile] = React.useState(false);
  const [containA, setContainA] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const fileRef = React.useRef();
  const isSendSuccess = useSelector((state) => state.adminReducer.sendSuccess);
  const [open, setOpen] = React.useState(false);
  const [form, setForm] = React.useState(initForm);
  const dispatch = useDispatch();

  const handleActiveButtons = (num) => {
    if (activeButtons.some((n) => n === num)) {
      return setActiveButtons((prev) => prev.filter((n) => n !== num));
    }
    setActiveButtons([...activeButtons, num]);
  };

  const handleChangeForm = (e) => {
    if (e.target.name === "phoneNumber" && isNaN(e.target.value)) return;
    if (e.target.name === "email") setContainA(false);
    setForm({
      ...form,
      [e.target.name]: {
        ...form[e.target.name],
        text: e.target.value,
        error: false,
      },
    });
  };

  const handleActiveInput = (num, e) => {
    if (activeInputs.some((n) => n === num) && form[e.target.name] === "") {
      return setActiveInputs((prev) => prev.filter((n) => n !== num));
    }
    setActiveInputs([...activeInputs, num]);
  };

  const handleAttachOnChange = () => {
    const _file = fileRef.current.files[0];
    if (_file && _file.size > 26000000) {
      return alert("Размер файла должен быть меньше 25МБ");
    }
    getBase64(_file)
      .then((res) =>
        setForm((prev) => {
          setAttachFile(true);
          return {
            ...prev,
            attachment: {
              name: _file.name,
              body: res.split(",")[1],
            },
          };
        })
      )
      .catch((e) => console.log(e));
  };

  const handleAttachClick = () => {
    fileRef.current.click();
  };

  const handleSubmit = () => {
    const a = Object.entries(form).map(([key, value]) =>
      !isEmpty(value.text)
        ? { ...value, key }
        : {
            ...value,
            error: true,
            key,
          }
    );
    if (a.some((el) => el.error)) {
      const b = a.reduce((acum, item) => {
        return {
          ...acum,
          [item.key]: {
            ...item,
          },
        };
      }, {});
      setForm(b);
    }
    if (!form.email.text.includes("@")) {
      setContainA(true);
      return;
    }
    let projectDetailText = form.projectDetails.text;
    if (activeButtons) {
      activeButtons.forEach((element) => {
        projectDetailText = `#${buttonText[element]} ${projectDetailText}`;
      });
    }
    const query = {
      companyName: form.companyName.text,
      email: form.email.text,
      phoneNumber: form.phoneNumber.text,
      projectDetails: projectDetailText,
      attachment: {
        body: form.attachment.body,
        name: form.attachment.name,
      },
    };
    setIsLoading(true);
    dispatch(contactUs(query));
  };
  const handleClose = () => {
    setOpen(false);
  };
  React.useEffect(() => {
    setOpen(isSendSuccess);
    if (isSendSuccess) {
      setForm(initForm);
      setAttachFile(false);
      setIsLoading(false);
    }
  }, [isSendSuccess]);
  return (
    <div
      ref={ref}
      className="WriteToUs-ColorContainer-module--cls2--1yHxW WriteToUs-ColorContainer-module--cls1--1WAkb"
    >
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="success">
          The message was successfully sent
        </Alert>
      </Snackbar>
      <div className="WidthContainer-OuterContainer-module--cls2--2akaW WidthContainer-OuterContainer-module--cls1--1qDQ4">
        <div className="WidthContainer-InnerContainer-module--cls2--32dv6 WidthContainer-InnerContainer-module--cls1--1Ms9D">
          <div className="WriteToUs-ContentContainer-module--cls2--34jXv WriteToUs-ContentContainer-module--cls1--2T6EL">
            <div className="WriteToUs-TitleContainer-module--cls2--XfiLy WriteToUs-TitleContainer-module--cls1--1mizr">
              <h2 className="WriteToUs-Title-module--cls2--2lz11 WriteToUs-Title-module--cls1--eAm0h">
                Contact us
              </h2>
              <div className="WriteToUs-SubTitleDesktop-module--cls2--1zXJu WriteToUs-SubTitleDesktop-module--cls1--2fNo5 WriteToUs-SubTitle-module--cls2--aoEkH WriteToUs-SubTitle-module--cls1--h_gez">
                We will help you with the evaluation
                <br />
                and planning of your
                <br /> project
              </div>
              <div className="WriteToUs-SubTitleMobile-module--cls2--2eWgk WriteToUs-SubTitleMobile-module--cls1--bs1RI WriteToUs-SubTitle-module--cls2--aoEkH WriteToUs-SubTitle-module--cls1--h_gez">
                We will help you with the evaluation
                <br />
                and planning of your project
              </div>
            </div>
            <form className="WriteToUsForm-Container-module--cls2--3wH_r WriteToUsForm-Container-module--cls1--1VBKW">
              <div className="WriteToUsForm-FieldsContainer-module--cls2--ClWIA WriteToUsForm-FieldsContainer-module--cls1---vdOw">
                <div className="WriteToUsForm-MobileStub-module--cls2--3gevH WriteToUsForm-MobileStub-module--cls1--TJXGf"></div>
                <div className="ChipSelectGroup-Container-module--cls2--3HbHV ChipSelectGroup-Container-module--cls1--2kZEL">
                  <div
                    onClick={handleActiveButtons.bind(null, 0)}
                    className={`ChipSelectGroup-Chip-module--cls2--2tjD1 ChipSelectGroup-Chip-module--cls1--336ll ${
                      activeButtons.some((num) => num === 0)
                        ? "ChipSelectGroup-Chip-module--active--1El6c"
                        : ""
                    }`}
                  >
                    Mobile
                  </div>
                  <div
                    onClick={handleActiveButtons.bind(null, 1)}
                    className={`ChipSelectGroup-Chip-module--cls2--2tjD1 ChipSelectGroup-Chip-module--cls1--336ll ${
                      activeButtons.some((num) => num === 1)
                        ? "ChipSelectGroup-Chip-module--active--1El6c"
                        : ""
                    }`}
                  >
                    Web
                  </div>
                  <div
                    onClick={handleActiveButtons.bind(null, 2)}
                    className={`ChipSelectGroup-Chip-module--cls2--2tjD1 ChipSelectGroup-Chip-module--cls1--336ll ${
                      activeButtons.some((num) => num === 2)
                        ? "ChipSelectGroup-Chip-module--active--1El6c"
                        : ""
                    }`}
                  >
                    Backend
                  </div>
                  <div
                    onClick={handleActiveButtons.bind(null, 3)}
                    className={`ChipSelectGroup-Chip-module--cls2--2tjD1 ChipSelectGroup-Chip-module--cls1--336ll ${
                      activeButtons.some((num) => num === 3)
                        ? "ChipSelectGroup-Chip-module--active--1El6c"
                        : ""
                    }`}
                  >
                    Design
                  </div>
                  <div
                    onClick={handleActiveButtons.bind(null, 4)}
                    className={`ChipSelectGroup-Chip-module--cls2--2tjD1 ChipSelectGroup-Chip-module--cls1--336ll ${
                      activeButtons.some((num) => num === 4)
                        ? "ChipSelectGroup-Chip-module--active--1El6c"
                        : ""
                    }`}
                  >
                    Analytics
                  </div>
                  <div
                    onClick={handleActiveButtons.bind(null, 5)}
                    className={`ChipSelectGroup-Chip-module--cls2--2tjD1 ChipSelectGroup-Chip-module--cls1--336ll ${
                      activeButtons.some((num) => num === 5)
                        ? "ChipSelectGroup-Chip-module--active--1El6c"
                        : ""
                    }`}
                  >
                    Testing
                  </div>
                </div>
                <div className="WriteToUsForm-ContactsRow-module--cls2--2CbOv WriteToUsForm-ContactsRow-module--cls1--3o4RM">
                  <div className="WriteToUsForm-InputWrapper-module--cls2--3HVds WriteToUsForm-InputWrapper-module--cls1--3XTyl">
                    <label className="Input-Label-module--cls2--yfK5D Input-Label-module--cls1--3_McV">
                      <span
                        className={`${
                          activeInputs.some((num) => num === 0) ? "active" : ""
                        }`}
                      >
                        Company name
                      </span>
                      <input
                        value={form.companyName.text}
                        onChange={handleChangeForm}
                        onFocus={handleActiveInput.bind(null, 0)}
                        onBlur={handleActiveInput.bind(null, 0)}
                        name="companyName"
                        className="Input-InputText-module--cls2--1y9p_ Input-InputText-module--cls1--1lNxY"
                      />
                    </label>
                    <div
                      className={`WriteToUsForm-Error-module--cls2--3DVeU WriteToUsForm-Error-module--cls1--38RV1 ${
                        form.companyName.error
                          ? "WriteToUsForm-Error-module--active--1KhNh"
                          : ""
                      }`}
                    >
                      Please type your name
                    </div>
                  </div>
                  <div className="WriteToUsForm-InputWrapper-module--cls2--3HVds WriteToUsForm-InputWrapper-module--cls1--3XTyl">
                    <label className="Input-Label-module--cls2--yfK5D Input-Label-module--cls1--3_McV">
                      <span
                        className={`${
                          activeInputs.some((num) => num === 1) ? "active" : ""
                        }`}
                      >
                        E-mail
                      </span>
                      <input
                        type="email"
                        value={form.email.text}
                        onChange={handleChangeForm}
                        onFocus={handleActiveInput.bind(null, 1)}
                        onBlur={handleActiveInput.bind(null, 1)}
                        name="email"
                        className="Input-InputText-module--cls2--1y9p_ Input-InputText-module--cls1--1lNxY"
                      />
                    </label>
                    <div
                      className={`WriteToUsForm-Error-module--cls2--3DVeU WriteToUsForm-Error-module--cls1--38RV1 ${
                        form.email.error
                          ? "WriteToUsForm-Error-module--active--1KhNh"
                          : ""
                      }`}
                    >
                      Please type your e-mail
                    </div>
                    <div
                      className={`WriteToUsForm-Error-module--cls2--3DVeU WriteToUsForm-Error-module--cls1--38RV1 ${
                        containA
                          ? "WriteToUsForm-Error-module--active--1KhNh"
                          : ""
                      }`}
                    >
                      The email requires @ symbol
                    </div>
                  </div>
                  <div className="WriteToUsForm-InputWrapper-module--cls2--3HVds WriteToUsForm-InputWrapper-module--cls1--3XTyl">
                    <label className="Input-Label-module--cls2--yfK5D Input-Label-module--cls1--3_McV">
                      <span
                        className={`${
                          activeInputs.some((num) => num === 2) ? "active" : ""
                        }`}
                      >
                        Phone number
                      </span>
                      <input
                        type="text"
                        maxLength={12}
                        value={form.phoneNumber.text}
                        onChange={handleChangeForm}
                        onFocus={handleActiveInput.bind(null, 2)}
                        onBlur={handleActiveInput.bind(null, 2)}
                        name="phoneNumber"
                        className="Input-InputText-module--cls2--1y9p_ Input-InputText-module--cls1--1lNxY"
                      />
                    </label>
                    <div
                      className={`WriteToUsForm-Error-module--cls2--3DVeU WriteToUsForm-Error-module--cls1--38RV1 ${
                        form.phoneNumber.error
                          ? "WriteToUsForm-Error-module--active--1KhNh"
                          : ""
                      }`}
                    >
                      Plese fill in the field
                    </div>
                  </div>
                </div>
                <div className="WriteToUsForm-MessageContainer-module--cls2--28qwq WriteToUsForm-MessageContainer-module--cls1--2gjGQ">
                  <label className="InputArea-Label-module--cls2--186Xi InputArea-Label-module--cls1--27RWN">
                    <span
                      className={`${
                        activeInputs.some((num) => num === 3) ? "active" : ""
                      }`}
                    >
                      Message text
                    </span>

                    <input
                      value={form.projectDetails.text}
                      onChange={handleChangeForm}
                      onFocus={handleActiveInput.bind(null, 3)}
                      onBlur={handleActiveInput.bind(null, 3)}
                      name="projectDetails"
                      className="InputArea-InputText-module--cls2--n-Nh7 InputArea-InputText-module--cls1--2I79l"
                    />
                    <span>
                      {attachFile && (
                        <svg
                          version="1.0"
                          xmlns="http://www.w3.org/2000/svg"
                          width="30pt"
                          height="30pt"
                          viewBox="0 0 46 50"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <metadata>
                            Created by potrace 1.16, written by Peter Selinger
                            2001-2019
                          </metadata>
                          <g
                            transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
                            fill="#fff"
                            stroke="none"
                          >
                            <path d="M264 308 l-103 -101 -45 41 c-44 41 -64 53 -51 31 4 -6 0 -9 -10 -7 -12 2 -18 -5 -20 -23 -3 -20 8 -38 46 -75 75 -74 83 -71 212 55 99 97 150 156 116 136 -9 -6 -10 -3 -5 10 6 18 -7 34 -28 35 -5 0 -55 -46 -112 -102z" />
                          </g>
                        </svg>
                      )}
                    </span>
                  </label>

                  <div
                    className={`WriteToUsForm-Error-module--cls2--3DVeU WriteToUsForm-Error-module--cls1--38RV1 ${
                      form.projectDetails.error
                        ? "WriteToUsForm-Error-module--active--1KhNh"
                        : ""
                    }`}
                  >
                    Please fill in the field
                  </div>

                  <img
                    onClick={handleAttachClick}
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xNi4zNjM2IDUuNDU0NTdWMThDMTYuMzYzNiAyMC40MTA5IDE0LjQxMDkgMjIuMzYzNiAxMiAyMi4zNjM2QzkuNTg5MTEgMjIuMzYzNiA3LjYzNjMxIDIwLjQxMDkgNy42MzYzMSAxOFY0LjM2MzYyQzcuNjM2MzEgMi44NTgxNyA4Ljg1ODEyIDEuNjM2MzYgMTAuMzYzNiAxLjYzNjM2QzExLjg2OSAxLjYzNjM2IDEzLjA5MDkgMi44NTgxNyAxMy4wOTA5IDQuMzYzNjJWMTUuODE4MkMxMy4wOTA5IDE2LjQxODIgMTIuNjA1NCAxNi45MDkxIDEyIDE2LjkwOTFDMTEuMzk0NSAxNi45MDkxIDEwLjkwOTEgMTYuNDE4MiAxMC45MDkxIDE1LjgxODJWNS40NTQ1N0g5LjI3MjczVjE1LjgxODJDOS4yNzI3MyAxNy4zMjM3IDEwLjQ5NDUgMTguNTQ1NSAxMiAxOC41NDU1QzEzLjUwNTQgMTguNTQ1NSAxNC43MjcyIDE3LjMyMzYgMTQuNzI3MiAxNS44MTgyVjQuMzYzNjJDMTQuNzI3MiAxLjk1Mjc1IDEyLjc3NDUgMCAxMC4zNjM2IDBDNy45NTI3NSAwIDYgMS45NTI3NSA2IDQuMzYzNjJWMThDNiAyMS4zMTY0IDguNjg5MTEgMjQgMTIgMjRDMTUuMzEwOSAyNCAxOCAyMS4zMTY0IDE4IDE4VjUuNDU0NTdIMTYuMzYzNloiIGZpbGw9IndoaXRlIi8+DQo8L3N2Zz4NCg=="
                    alt="AttachButton"
                    className="WriteToUsForm-AttachButton-module--cls2--2YyHm WriteToUsForm-AttachButton-module--cls1--11985"
                  />

                  <input
                    ref={fileRef}
                    onChange={handleAttachOnChange}
                    type="file"
                    className="WriteToUsForm-InvisibleFileInput-module--cls2--3ajJZ WriteToUsForm-InvisibleFileInput-module--cls1--3zcHc"
                  />
                </div>
              </div>
              <a
                onClick={handleSubmit}
                className="WriteToUsForm-SendButton-module--cls2--3aCUc WriteToUsForm-SendButton-module--cls1--3XEGZ Buttons-BigWhiteButton-module--cls2--g05zN Buttons-BigWhiteButton-module--cls1--2H7YS"
              >
                Send
              </a>
              {isLoading && (
                <Loader type="spin" color="#aaaaaa" message="Laoding..." />
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
