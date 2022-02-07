import { makeStyles } from "@material-ui/core";
import { SOCIAL_LIST } from "../../constant.js";
import FooterLine from "../../assets/footer_line.svg";

const useStyles = makeStyles({
  footerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    color: "#565656",

    background: "rgba(255, 255, 255, 0.01)",
    borderTop: "outset 1px solid rgba(22, 22, 22, 1)",
    margin: "0",
    padding: "0",
  },

  footerSocialWrapper: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    marginTop: "40px",
    marginBottom: "40px",

    color: "#E2E2E1",

    fontSize: "16px",
    letterSpacing: "0.3em",
    fontWeight: "400px",
    fontFamily: "tommy-light",
  },

  footerSocial: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "122px",
    gap: "57px",
  },

  footerSocialItem: {
    cursor: "pointer",
  },

  footerPrivacy: {
    display: "flex",
    marginRight: "122px",
  },

  footerItem: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: "8px",
    color: "rgba(86, 86, 86, 1)",
    letterSpacing: "4px",

    fontSize: "10px",
    fontWeight: "400px",
    fontFamily: "tommy-thin",
  },
});

const MainFooter = ({ scrollToElement, isActiveDevelopersSection }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.footerContainer}>
        <div className={classes.footerSocialWrapper}>
          <div className={classes.footerSocial}>
            {SOCIAL_LIST.map((item) => (
              <div className={classes.footerSocialItem}>{item.label}</div>
            ))}
          </div>
          <div className={classes.footerPrivacy}>PRIVACY & POLICE</div>
        </div>
        <div className={classes.footerItem}>
          <img src={FooterLine} alt="" />
        </div>
        <div className={classes.footerItem}>@2021-2022</div>
        <div className={classes.footerItem} style={{ marginBottom: "20px" }}>
          ALL RIGHTS RESERVED BY COWORK DEVELOPMENT
        </div>
      </div>
    </>
  );
};

export default MainFooter;
