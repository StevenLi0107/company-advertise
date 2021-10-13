import React from "react";
import { Box, IconButton, Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useStyles } from "./styles";

const ListItem = ({ children, id, handleEdit, handleDelete, handleUpload }) => {
  const classes = useStyles();

  const onDeleteClick = () => {
    handleDelete(id);
  };

  return (
    <Box
      className={classes.root}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      {children}
      <Box>
        <Button onClick={handleUpload}>Upload</Button>
        <IconButton onClick={handleEdit} aria-label="edit">
          <EditIcon />
        </IconButton>
        <IconButton onClick={onDeleteClick} aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ListItem;
