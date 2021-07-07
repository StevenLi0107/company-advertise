import React from 'react';
import { useStyles } from './styles';
import { Typography, Avatar, Box, TextField } from '@material-ui/core';
import ListItem from '../../ListItem';

const UserCard = ({ user, handleDeleteUser, handleChangeUserInfo }) => {
  const [formState, setFormstate] = React.useState(user);
  const [isEditing, setIsEditing] = React.useState(false);
  const classes = useStyles();

  const { name, role, url } = formState;

  const handleChange = React.useCallback(
    ({ target: { name, value } }) => {
      setFormstate({ ...formState, [name]: value });
    },
    [formState],
  );

  const handleEdit = () => {
    if (isEditing) {
      handleChangeUserInfo(formState);
    }
    setIsEditing(!isEditing);
  };

  return (
    <ListItem
      handleEdit={handleEdit}
      handleDelete={handleDeleteUser}
      id={user.id}>
      <Box display="flex">
        <Avatar src={url} />
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
                name="role"
                onChange={handleChange}
                value={role}
                placeholder="Role"
              />
            </Box>
          ) : (
            <>
              <Typography>{user.name}</Typography>
              <span className={classes.subtitle}>{user.role}</span>
            </>
          )}
        </Box>
      </Box>
    </ListItem>
  );
};

export default UserCard;
