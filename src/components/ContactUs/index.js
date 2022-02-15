/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Snackbar } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import { get } from "lodash";

import MuiAlert from "@material-ui/lab/Alert";
import { display, flexbox } from "@material-ui/system";
import { classes } from "istanbul-lib-coverage";

import { contactUs } from "../../redux/actions/formsActions";
import { getBase64 } from "../../utils/base64";
import { isEmpty } from "../../utils/stringUtils";
import Loader from "./Loader";

import BigPattern from "../../assets/big-pattern.png";
import BackPoints from "../../assets/back-points.png";
import Rectangle from "../../assets/contactRectangle.svg";
import Arrow from "../../assets/arrow_horizontal.svg";
import AttachChecked from "../../assets/attach_check.svg";
import FileAttach from "../../assets/file_attach.svg";
import Logo from "../../assets/logo.svg";
import Success from "../../assets/success-check.svg";
import Close from "../../assets/close-icon.svg";

import { CONTACT_SERVICE_LIST, INITFORM_LIST } from "../../constant.js";
import "./styles.css";

const styles = {
  snackbarStyleViaContentProps: {
    backgroundColor: "orange",
  },
};

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
  const dispatch = useDispatch();
  const isSendSuccess = useSelector((state) => state.adminReducer.sendSuccess);

  const [activeButtons, setActiveButtons] = useState([]);
  const [activeInputs, setActiveInputs] = useState([]);
  const [attachFile, setAttachFile] = useState(false);
  const [containA, setContainA] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [form, setForm] = useState(initForm);

  const fileRef = useRef();

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
      return alert("File size must be less than 25MB");
    }
    getBase64(_file)
      .then((res) =>
        setForm((prev) => {
          setAttachFile(true);
          setOpen(true);
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

  useEffect(() => {
    // setOpen(isSendSuccess);
    if (isSendSuccess) {
      setAttachFile(false);
      setOpen(isSendSuccess);
      setForm(initForm);
      setIsLoading(false);
    }
  }, [isSendSuccess]);

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  console.log("containA", containA, isSendSuccess);

  return (
    <div className="contact-container">
      <img src={BackPoints} alt="" className="contact-back-points" />
      <img src={BigPattern} alt="" className="contact-big-pattern" />
      <div className="contact-wrapper">
        <div className="contact-description">
          <div className="contact-title">
            <span>
              We Help You To Turn
              <br />
              Ideas Into Reality
            </span>
          </div>
          <div style={{ display: "flex", width: "511px" }}>
            <p className="quote">“</p>
          </div>
          <div className="contact-body">
            <span className="contact-text">
              It has many landing page variations
              <br /> to choose from, which one is <br />
              always a big advantage.
            </span>
            <p className="quote" id="after-quote">
              “
            </p>
          </div>
          <div className="contact-logo-wrapper">
            <img className="contact-logo-img" src={Logo} alt="" />
            <div className="contact-logo-text">
              <span>Ivan Cheng</span>
              <span img className="contact-logo-service-text">
                CEO <span> | </span> Cowork Development
              </span>
            </div>
          </div>
        </div>
        <div className="contact-info-wrapper">
          <div style={{ zIndex: "3" }}>
            <Snackbar
              open={isOpen}
              autoHideDuration={4000}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <div className="contact-alert-section">
                <img
                  src={Success}
                  alt="success"
                  className="contact-alert-success-img"
                />
                <div className="contact-alert-message">
                  {attachFile
                    ? "File is successfully attached"
                    : "Request is successfully sent"}
                </div>
                <img
                  src={Close}
                  alt="success"
                  onClick={handleClose}
                  className="contact-alert-close-img"
                />
              </div>
            </Snackbar>
          </div>
          <img
            src={Rectangle}
            alt=""
            className="contact-info-background-high"
          />
          <img src={Rectangle} alt="" className="contact-info-background-low" />
          <div className="contact-info-background-high">
            <div className="contact-info-title">
              Fill out the form and we'll be in touch as soon as possible
            </div>
            <div className="contact-service">
              {CONTACT_SERVICE_LIST.map((item, index) => (
                <div
                  onClick={handleActiveButtons.bind(null, index)}
                  className={
                    activeButtons.some((num) => num === index) &&
                    "contact-service-item-active"
                  }
                >
                  {item.label}
                </div>
              ))}
            </div>
            <div className="contact-info-label">
              {INITFORM_LIST.map((item, index) => (
                <span className="contact-info-item">
                  <input
                    value={get(form, [`${item.key}`, "text"])}
                    onChange={handleChangeForm}
                    onFocus={handleActiveInput.bind(null, index)}
                    onBlur={handleActiveInput.bind(null, index)}
                    placeholder={item.label}
                    name={item.key}
                  />
                  <div className="contact-info-item-line">
                    <span></span>
                  </div>
                  <div
                    className={`contact-error-field ${
                      get(form, [`${item.key}`, "error"])
                        ? "WriteToUsForm-Error-module--active"
                        : ""
                    }`}
                  >
                    {item.errorText}
                  </div>
                  {item.key === "email" && (
                    <div
                      style={{ marginTop: "-16px" }}
                      className={`contact-error-field ${
                        !form.email.error && containA
                          ? "WriteToUsForm-Error-module--active"
                          : ""
                      }`}
                    >
                      The email requires @ symbol
                    </div>
                  )}
                </span>
              ))}

              {/* <span className="contact-info-item">
                <input placeholder="Company*" />
                <div className="contact-info-item-line">
                  <span></span>
                </div>
              </span>
              <span className="contact-info-item">
                <input placeholder="Email*" />
                <div className="contact-info-item-line">
                  <span></span>
                </div>
              </span>
              <span className="contact-info-item">
                <input placeholder="Phone*" />
                <div className="contact-info-item-line">
                  <span></span>
                </div>
              </span> */}
              <span className="contact-info-item">
                <div
                  className="contact-file-attach-wrapper"
                  style={{ border: "none" }}
                >
                  <input
                    value={form.projectDetails.text}
                    onChange={handleChangeForm}
                    onFocus={handleActiveInput.bind(null, 3)}
                    onBlur={handleActiveInput.bind(null, 3)}
                    name="projectDetails"
                    id="contact-message"
                    placeholder="Message*"
                  />
                  <img
                    onClick={handleAttachClick}
                    alt="file attach click"
                    src={FileAttach}
                    className="contact-file-attach-img"
                  />
                  <input
                    ref={fileRef}
                    onChange={handleAttachOnChange}
                    type="file"
                    className="contact-file-attach-input"
                  />
                </div>
                <div className="contact-info-item-line">
                  <span></span>
                </div>
              </span>
              <div className="client-file-attach-status">
                <div
                  className={`contact-error-field ${
                    form.companyName.error
                      ? "WriteToUsForm-Error-module--active"
                      : ""
                  }`}
                >
                  Plese fill in the field
                </div>
                {attachFile ? (
                  <div className="contact-file-attach-check ">
                    <img alt="" src={AttachChecked} />
                    <p>file attached</p>
                  </div>
                ) : (
                  <div className="contact-file-attach-check "></div>
                )}
              </div>

              <div className="contact-info-touch" onClick={handleSubmit}>
                <p>GET IN TOUCH</p>
                <img alt="" src={Arrow} onClick={handleSubmit} />
              </div>
              <div>
                {isLoading && (
                  <Loader
                    type="spinningBubbles"
                    color="#aaaaaa"
                    message="Laoding..."
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
