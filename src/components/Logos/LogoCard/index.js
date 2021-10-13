import React from "react";
import { useStyles } from "./styles";
import { Typography, Box, TextField } from "@material-ui/core";
import ListItem from "../../ListItem";

const LogoCard = ({
  company,
  handleDeleteCompany,
  handleChangeClientInfo,
  handleUpload,
}) => {
  const [formState, setFormstate] = React.useState(company);
  const [isEditing, setIsEditing] = React.useState(false);
  const classes = useStyles();

  const { name, img } = formState;

  const handleChange = React.useCallback(
    ({ target: { name, value } }) => {
      setFormstate({ ...formState, [name]: value });
    },
    [formState]
  );
  const handleEdit = () => {
    if (isEditing) {
      handleChangeClientInfo(formState);
    }
    setIsEditing(!isEditing);
  };

  return (
    <ListItem
      id={company.id}
      handleEdit={handleEdit}
      handleDelete={handleDeleteCompany}
      handleUpload={handleUpload}
    >
      <Box display="flex" flexDirection="column">
        {isEditing ? (
          <Box display="flex" alignItems="center">
            <TextField
              variant="outlined"
              size="small"
              name="name"
              onChange={handleChange}
              value={name}
              placeholder="CompanyName"
            />
          </Box>
        ) : (
          <Box display="flex" alignItems="center">
            <img
              className={classes.companyLogo}
              src={`https://api.cowork.dev/data/img/${img}`}
              alt=""
            />
            <Typography>{name}</Typography>
          </Box>
        )}
      </Box>
    </ListItem>
  );
};

export default LogoCard;
