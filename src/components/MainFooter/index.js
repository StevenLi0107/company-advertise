import { makeStyles } from "@material-ui/core";
import { SOCIAL_LIST } from "../../constant.js";
import FooterLine from "../../assets/footer_line.svg";
import "./styles.css";

const MainFooter = ({ scrollToElement, isActiveDevelopersSection }) => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-social-wrapper">
          <div className="footer-social">
            {SOCIAL_LIST.map((item) => (
              <a
                target="_blank"
                className="footer-social-item"
                href={item.href}
                aria-label={item.label}
                rel="noopener noreferrer"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="footer-privacy">PRIVACY & POLICE</div>
        </div>
        <div className="footer-item">
          <img src={FooterLine} alt="" />
        </div>
        <div className="footer-item">@2021-2022</div>
        <div className="footer-item" style={{ marginBottom: "20px" }}>
          ALL RIGHTS RESERVED BY COWORK DEVELOPMENT
        </div>
      </div>
    </>
  );
};

export default MainFooter;
