import React from 'react';
import { IconButton, Box, Button } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { useStyles } from './styles';
import { mock } from './mock';
import { AddUserModal } from '../Modals/AddUserModal';
import UserCard from './UserCard';
import { CardDnd } from '../CardDnd';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteUser,
  addUser,
  saveUsersOrder,
  updateUser,
  changeUsersOrder,
} from '../../redux/actions/adminAction';
import { checkTokenValid } from '../../redux/actions/authAction';

const People = () => {
  const usersList = useSelector((state) => state.adminReducer.usersList);
  const initialState = React.useRef();
  const [openModal, setOpenModal] = React.useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();

  React.useEffect(() => {
    dispatch(checkTokenValid());
    initialState.current = usersList;
  }, []);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = React.useCallback(() => {
    setOpenModal(false);
  }, [openModal]);

  const handleDeleteUser = React.useCallback((id) => {
    dispatch(deleteUser(id));
  }, []);

  const handleAddUser = React.useCallback((newUser) => {
    dispatch(addUser(newUser));
  }, []);

  const handleChangeUserInfo = React.useCallback((user) => {
    dispatch(updateUser(user));
  }, []);

  const moveCard = React.useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = usersList[dragIndex];

      const coppiedStateArray = [...usersList];

      const prevItem = coppiedStateArray.splice(hoverIndex, 1, dragCard);

      coppiedStateArray.splice(dragIndex, 1, prevItem[0]);

      dispatch(changeUsersOrder(coppiedStateArray));
    },
    [usersList],
  );

  const handleSave = () => {
    dispatch(saveUsersOrder(usersList));
  };

  const isDisabledButton = React.useCallback(() => {
    if (!usersList?.length || !initialState?.current?.length) return true;
    return JSON.stringify(initialState.current) === JSON.stringify(usersList);
  }, [usersList]);

  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <IconButton onClick={handleOpenModal} aria-label="add">
          <AddCircleOutlineIcon />
          Add
        </IconButton>
        <Button
          disabled={isDisabledButton()}
          onClick={handleSave}
          variant="contained"
          color="primary">
          Save
        </Button>
      </Box>

      <hr />
      {usersList &&
        usersList.map((user, index) => (
          <CardDnd
            key={user.id + user.name}
            id={user.id}
            index={index}
            moveCard={moveCard}>
            <UserCard
              user={user}
              handleDeleteUser={handleDeleteUser}
              handleChangeUserInfo={handleChangeUserInfo}
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

export default React.memo(People);
