import { useEffect, useState, useCallback } from "react";
import { useStyles } from "./styles";
import { Typography, Box, TextField, Avatar } from "@material-ui/core";
import ListItem from "../../ListItem";

const PortfolioCard = ({
  portfolio,
  handleDeletePortfolio,
  handleChangePortfolioInfo,
  handleUpload,
}) => {
  const [formState, setFormstate] = useState(portfolio);
  const [isEditing, setIsEditing] = useState(false);
  const [img, setImg] = useState(portfolio.img);
  const classes = useStyles();
  const { name, description } = formState;

  useEffect(() => {
    setImg(portfolio.img);
    setFormstate({ ...formState, img: portfolio.img });
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

  return (
    <ListItem
      id={portfolio.id}
      handleEdit={handleEdit}
      handleDelete={handleDeletePortfolio}
      handleUpload={handleUpload}
    >
      <Box display="flex">
        <Avatar src={`https://api.cowork.dev/data/img/${img}`} />
        <Box ml="10px" display="flex" flexDirection="column">
          {isEditing ? (
            <Box display="flex" alignItems="center">
              <TextField
                variant="outlined"
                size="small"
                name="name"
                onChange={handleChange}
                value={name}
                placeholder="Name"
              />
              <TextField
                variant="outlined"
                size="small"
                name="description"
                onChange={handleChange}
                value={description}
                placeholder="description"
              />
            </Box>
          ) : (
            <>
              <Typography>{name}</Typography>
              <span className={classes.subtitle}>{description}</span>
            </>
          )}
        </Box>
      </Box>
    </ListItem>
  );
};

export default PortfolioCard;
