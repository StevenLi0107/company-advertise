import React from 'react';
import { useStyles } from './styles';
import { Typography, Avatar, Box, TextField } from '@material-ui/core';
import ListItem from '../../ListItem';

const UserCard = ({ user, handleDeleteUser }) => {
  const [formState, setFormstate] = React.useState(user);
  const [isEditing, setIsEditing] = React.useState(false);
  const classes = useStyles();

  const { firstName, lastName, role, url } = formState;

  const handleChange = React.useCallback(
    ({ target: { name, value } }) => {
      setFormstate({ ...formState, [name]: value });
    },
    [formState],
  );

  const handleEdit = () => {
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
                name="firstName"
                onChange={handleChange}
                value={firstName}
                placeholder="firstName"
              />
              <TextField
                variant="outlined"
                size="small"
                name="lastName"
                onChange={handleChange}
                value={lastName}
                placeholder="lastName"
              />
              <TextField
                variant="outlined"
                size="small"
                name="role"
                onChange={handleChange}
                value={role}
                placeholder="role"
              />
            </Box>
          ) : (
            <>
              <Typography>
                {firstName} {lastName}
              </Typography>
              <span className={classes.subtitle}>{role}</span>
            </>
          )}
        </Box>
      </Box>
    </ListItem>
  );
};

export default UserCard;
