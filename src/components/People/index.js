import React from 'react';
import { IconButton } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
// import List from '../List';
import { useStyles } from './styles';
import { mock } from './mock';
import { AddUserModal } from '../Modals/AddUserModal';
import UserCard from '../UserCard';

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

  return (
    <>
      <IconButton onClick={handleOpenModal} aria-label="add">
        <AddCircleOutlineIcon />
        Add
      </IconButton>
      <hr />
      {formState.map((user) => (
        <UserCard
          key={user.id + user.firstName}
          user={user}
          handleDeleteUser={handleDeleteUser}
        />
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
