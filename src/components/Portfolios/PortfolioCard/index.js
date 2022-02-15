import { useEffect, useState, useCallback } from "react";
import { get } from "lodash";
import { Typography, Box, TextField, Avatar } from "@material-ui/core";
import ListItem from "../../ListItem";
import { PORTFOLIO_LIST } from "../../../constant";
import "./styles.css";

const PortfolioCard = ({
  portfolio,
  handleDeletePortfolio,
  handleChangePortfolioInfo,
  handleUpload,
}) => {
  const [formState, setFormstate] = useState(portfolio);
  const [isEditing, setIsEditing] = useState(false);
  const [img, setImg] = useState(portfolio.img);
  const { name, description } = formState;

  useEffect(() => {
    setImg(portfolio.img);
    setFormstate({ ...formState, img: portfolio.img });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [portfolio.img]);

  const handleChange = useCallback(
    ({ target: { name, value } }) => {
      setFormstate({ ...formState, [name]: value, img });
    },
    [formState, img]
  );

  const handleEdit = () => {
    if (isEditing) {
      handleChangePortfolioInfo(formState);
    }
    setIsEditing(!isEditing);
  };

  // console.log("formState:", formState);
  return (
    <ListItem
      id={portfolio.id}
      handleEdit={handleEdit}
      handleDelete={handleDeletePortfolio}
      handleUpload={handleUpload}
    >
      <Box display="flex" alignItems="center" width="70%">
        {img ? (
          <img
            style={{ width: "50px", height: "50px", textAlign: "center" }}
            src={`https://api.cowork.dev/data/img/${img}`}
            alt=""
          />
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "50px",
              height: "50px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar src={`https://api.cowork.dev/data/img/${img}`} />
          </div>
        )}
        <Box ml="10px" display="flex" flexDirection="column" width="80%">
          {isEditing ? (
            <div display="flex" flexDirection="column" alignItems="center">
              {PORTFOLIO_LIST.map((item) => (
                <TextField
                  variant="outlined"
                  size="small"
                  name={item.key}
                  onChange={handleChange}
                  value={get(formState, item.key)}
                  label={item.placeholder}
                  multiline
                  style={{
                    width: "100%",
                    marginTop: "10px",
                    marginBottom: "5px",
                  }}
                />
              ))}
              {/* <TextField
                variant="outlined"
                size="small"
                name="name"
                onChange={handleChange}
                value={name}
                placeholder="Name"
                multiline
                style={{ width: "450px", marginBottom: "5px" }}
              />
              <TextField
                variant="outlined"
                size="small"
                name="description"
                onChange={handleChange}
                value={description}
                placeholder="description"
                multiline
                style={{ width: "450px" }}
              /> */}
            </div>
          ) : (
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography className="portfolio-subtitle">
                {get(formState, "name")}
              </Typography>
              <div className="portfolio-subtitle">
                {get(formState, "description")}
              </div>
            </div>
          )}
        </Box>
      </Box>
    </ListItem>
  );
};

export default PortfolioCard;
