import React from 'react';
import { IconButton, Box, Button } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
// import List from '../List';
import { useStyles } from './styles';
import { mock } from './mock';
import { AddUserModal } from '../Modals/AddUserModal';
import UserCard from './UserCard';
import { CardDnd } from '../CardDnd';

const People = () => {
  const [formState, setFormState] = React.useState(mock);
  const [openModal, setOpenModal] = React.useState(false);
  const classes = useStyles();

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = React.useCallback(() => {
    setOpenModal(false);
  }, [openModal]);

  const handleDeleteUser = React.useCallback(
    (id) => {
      const newUserList = formState.filter((user) => user.id !== id);
      setFormState(newUserList);
    },
    [formState],
  );

  const handleAddUser = React.useCallback(
    (newUser) => {
      setFormState([...formState, newUser]);
    },
    [formState],
  );

  const moveCard = React.useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = formState[dragIndex];

      const coppiedStateArray = [...formState];

      const prevItem = coppiedStateArray.splice(hoverIndex, 1, dragCard);

      coppiedStateArray.splice(dragIndex, 1, prevItem[0]);

      setFormState(coppiedStateArray);
    },
    [formState],
  );

  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <IconButton onClick={handleOpenModal} aria-label="add">
          <AddCircleOutlineIcon />
          Add
        </IconButton>
        <Button variant="contained" color="primary">
          Save
        </Button>
      </Box>

      <hr />
      {formState.map((user, index) => (
        <CardDnd
          key={user.id + user.title}
          id={user.id}
          index={index}
          moveCard={moveCard}>
          <UserCard
            key={user.id + user.firstName}
            user={user}
            handleDeleteUser={handleDeleteUser}
          />
        </CardDnd>
      ))}
      <AddUserModal
        open={openModal}
        handleClose={handleCloseModal}
        handleAddUser={handleAddUser}
      />
    </>
  );
};

export default People;
