import React from "react";
import { useStyles } from "./styles";
import { Typography, Box, TextField } from "@material-ui/core";
import ListItem from "../../ListItem";

const LogoCard = ({ company, handleDeleteCompany, handleChangeClientInfo }) => {
  const [formState, setFormstate] = React.useState(company);
  const [isEditing, setIsEditing] = React.useState(false);
  const classes = useStyles();

  const { name, url } = formState;

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
      handleDelete={handleDeleteCompany}
      handleEdit={handleEdit}
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
              placeholder="companyName"
            />
          </Box>
        ) : (
          <Box display="flex" alignItems="center">
            <img className={classes.companyLogo} src={url} />
            <Typography>{name}</Typography>
          </Box>
        )}
      </Box>
    </ListItem>
  );
};

export default LogoCard;
