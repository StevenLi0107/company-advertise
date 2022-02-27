/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Snackbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { get } from "lodash";
import MuiAlert from "@material-ui/lab/Alert";
import { TextField } from "@material-ui/core";
import { contactUs } from "../../redux/actions/formsActions";
import { getBase64 } from "../../utils/base64";
import { isEmpty } from "../../utils/stringUtils";
import BigPattern from "../../assets/big-pattern.png";
import BackPoints from "../../assets/back-points.png";
import Rectangle from "../../assets/contactRectangle.svg";
import Arrow from "../../assets/arrow_horizontal.svg";
import AttachChecked from "../../assets/attach_check.svg";
import AttachFailed from "../../assets/attach_failed.svg";
import FileAttach from "../../assets/file_attach.png";
import Logo from "../../assets/logo.svg";
import Success from "../../assets/success-check.svg";
import SendFailed from "../../assets/send_failed.svg";
import Close from "../../assets/close-icon.svg";

import { CONTACT_SERVICE_LIST, INITFORM_LIST } from "../../constant.js";
import * as TYPES from "../../redux/actions/types.js";
import "./styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormLabel-root": {
      color: "#e2e2e1 !important",
      marginLeft: "20px",
      fontFamily: "tommy-thin",
      fontSize: "18px",
      lineHeight: "26px",
    },
    "& .MuiFormLabel-root.Mui-focused": {
      color: "#dec8a7 !important",
      fontFamily: "tommy-thin",
      fontSize: "14px",
    },
    "& .MuiInput-underline": {
      width: "430px",
      border: "none",
      // borderBottom: "1px solid grey !important",
    },
    "& .MuiInput-underline:before": {
      width: "430px",
      padding: "0",
      // border: "none",
      borderBottom: "1px solid grey !important",
    },
    "& .MuiInput-underline:after": {
      width: "430px",
      // border: "none",
      borderBottom: "1px solid grey !important",
    },
  },

  rootDeactive: {
    "& .MuiFormLabel-root": {
      color: "#dec8a7 !important",
      marginLeft: "20px",
      fontFamily: "tommy-thin",
      fontSize: "14px",
      lineHeight: "26px",
    },
    "& .MuiInput-underline": {
      width: "430px",
      border: "none",
      // borderBottom: "1px solid grey !important",
    },
    "& .MuiInput-underline:before": {
      width: "430px",
      // border: "none",
      borderBottom: "1px solid grey !important",
    },
    "& .MuiInput-underline:after": {
      width: "430px",
      // border: "none",
      borderBottom: "1px solid grey !important",
    },
  },
}));

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

// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

const ContactUs = ({ ref }) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const isSendSuccess = useSelector((state) => state.adminReducer.sendSuccess);
  const isSendFailed = useSelector((state) => state.adminReducer.failed);

  const [activeButtons, setActiveButtons] = useState([]);
  const [attachFile, setAttachFile] = useState(false);
  const [attachFileFailed, setAttachFileFailed] = useState(false);
  const [containA, setContainA] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [form, setForm] = useState(initForm);
  const [isSending, setIsSending] = useState(false);

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

  const handleAttachOnChange = () => {
    const _file = fileRef.current.files[0];
    if (_file && _file.size > 26000000) {
      setAttachFileFailed(true);
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
      .catch((e) => setAttachFileFailed(true));
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
    dispatch(contactUs(query));
    setIsSending(true);
    setOpen(true);
  };

  const handleClose = () => {
    setIsSending(false);

    (isSendFailed || isSendSuccess) &&
      dispatch({ type: TYPES.SEND_MSG_REQUEST, payload: null });
    setOpen(false);
  };

  useEffect(() => {
    setOpen(isSendSuccess || isSending || isSendFailed || attachFileFailed);
    if (isSendSuccess) {
      setOpen(true);
      setAttachFile(false);
      setAttachFileFailed(false);
      setIsSending(false);
      setForm(initForm);
      dispatch({ type: TYPES.SEND_MSG_REQUEST, payload: null });
    }
    if (isSendFailed) {
      setIsSending(false);
      setOpen(true);
    }
  }, [isSendSuccess, isSendFailed, isSending, attachFileFailed, dispatch]);

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
            <span className="quote">“</span>
          </div>
          <div className="contact-body">
            <span className="contact-text">
              Words don’t matter – our skill does,
              <br /> and this is where your business can
              <br /> benefit from.
            </span>
            <span className="quote" id="after-quote">
              “
            </span>
          </div>
          <div className="contact-logo-wrapper">
            <img className="contact-logo-img" src={Logo} alt="" />
            <div className="contact-logo-text">
              <div className="contact-logo-title-text">Ivan Cheng</div>
              <span className="contact-logo-service-text">
                CEO <span> | </span> Cowork Development
              </span>
            </div>
          </div>
        </div>
        <div className="contact-info-wrapper">
          <div style={{ zIndex: "3" }}>
            <Snackbar
              open={isOpen}
              autoHideDuration={2000}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            >
              <div className="contact-alert-section">
                {((attachFile &&
                  !isSendFailed &&
                  !isSending &&
                  !attachFileFailed) ||
                  (isSending && !isSendFailed) ||
                  (isSendSuccess && !isSendFailed)) && (
                  <img
                    src={Success}
                    alt="success"
                    className="contact-alert-success-img"
                  />
                )}
                {(attachFileFailed || isSendFailed) &&
                  !isSendSuccess &&
                  !isSending && (
                    <img
                      src={SendFailed}
                      alt="Failed"
                      className="contact-alert-success-img"
                    />
                  )}
                <div className="contact-alert-message">
                  {(!isSendSuccess &&
                    !isSending &&
                    !isSendFailed &&
                    attachFile &&
                    "File is successfully attached") ||
                    (!isSendSuccess &&
                      !isSendFailed &&
                      isSending &&
                      "Sending your request...") ||
                    (!isSendFailed &&
                      isSendSuccess &&
                      "Request is successfully sent") ||
                    (!isSendSuccess && isSendFailed && "Form not submitted.")}
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
                  <TextField
                    label={item.label}
                    name={item.key}
                    variant="standard"
                    value={get(form, [`${item.key}`, "text"])}
                    className={
                      get(form, [`${item.key}`, "text"]) === ""
                        ? classes.root
                        : classes.rootDeactive
                    }
                    onChange={handleChangeForm}
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
              <span className="contact-info-item">
                <div
                  className="contact-file-attach-wrapper"
                  style={{ border: "none" }}
                >
                  <TextField
                    label="Message*"
                    name="projectDetails"
                    variant="standard"
                    value={form.projectDetails.text}
                    className={
                      form.projectDetails.text === ""
                        ? classes.root
                        : classes.rootDeactive
                    }
                    onChange={handleChangeForm}
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
                  Please type your message
                </div>
                {attachFile ? (
                  <div className="contact-file-attach-check ">
                    <img alt="" src={AttachChecked} />
                    <p>file attached</p>
                  </div>
                ) : attachFileFailed ? (
                  <div className="contact-file-attach-check ">
                    <img alt="" src={AttachFailed} />
                    <p>file not attached</p>
                  </div>
                ) : (
                  <div className="contact-file-attach-check "></div>
                )}
              </div>

              <div className="contact-info-touch" onClick={handleSubmit}>
                <span className="contact-info-touch-block">
                  <span>GET IN TOUCH</span>
                  <img alt="" src={Arrow} style={{ marginLeft: "10px" }} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
