import React from "react";
import { IconButton, Box, Button } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
// import { useStyles } from './styles';
// import { mock } from './mock';
import { AddUserModal } from "../Modals/AddUserModal";
import UserCard from "./UserCard";
import { CardDnd } from "../CardDnd";
import { useSelector, useDispatch } from "react-redux";
import { UploadImageModal } from "../Modals/UploadImageModal";
import {
  deleteUser,
  addUser,
  saveUsersOrder,
  updateUser,
  changeUsersOrder,
  uploadImage,
  changeStatusOfPeopleSection,
} from "../../redux/actions/adminAction";
import { checkTokenValid } from "../../redux/actions/authAction";

const People = () => {
  const isActivePeopleSection = useSelector(
    (state) => state.adminReducer.isActivePeopleSection
  );
  const usersList = useSelector((state) => state.adminReducer.usersList);
  const initialState = React.useRef();
  const [openModal, setOpenModal] = React.useState(false);
  const [openUpload, setOpenUpload] = React.useState(false);
  const dispatch = useDispatch();
  // const classes = useStyles();
  const [uploadId, setUploadId] = React.useState();

  React.useEffect(() => {
    dispatch(checkTokenValid());
    initialState.current = usersList;
  }, [dispatch, usersList]);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleUpload = (id) => {
    setUploadId(id);
    setOpenUpload(true);
  };

  const handleCloseModal = React.useCallback(() => {
    setOpenModal(false);
  }, []);

  const handleCloseUploadModal = React.useCallback(() => {
    setOpenUpload(false);
  }, []);

  const handleDeleteUser = React.useCallback(
    (id) => {
      dispatch(deleteUser(id));
    },
    [dispatch]
  );

  const handleAddUser = React.useCallback(
    (newUser) => {
      dispatch(addUser(newUser));
    },
    [dispatch]
  );

  const handleChangeUserInfo = React.useCallback(
    (user) => {
      dispatch(updateUser(user));
    },
    [dispatch]
  );

  const handleUploadImage = React.useCallback(
    (newImage) => {
      dispatch(uploadImage(newImage, uploadId));
    },
    [dispatch]
  );

  const moveCard = React.useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = usersList[dragIndex];

      const coppiedStateArray = [...usersList];

      const prevItem = coppiedStateArray.splice(hoverIndex, 1, dragCard);

      coppiedStateArray.splice(dragIndex, 1, prevItem[0]);

      dispatch(changeUsersOrder(coppiedStateArray));
    },
    [dispatch, usersList]
  );

  const handleSave = () => {
    dispatch(saveUsersOrder(usersList));
  };

  const isDisabledButton = React.useCallback(() => {
    if (!usersList?.length || !initialState?.current?.length) return true;
    return JSON.stringify(initialState.current) === JSON.stringify(usersList);
  }, [usersList]);

  const handleStatusPeopleSection = () => {
    dispatch(changeStatusOfPeopleSection(!isActivePeopleSection));
  };
  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Button
          onClick={handleStatusPeopleSection}
          variant="contained"
          color="primary"
        >
          {isActivePeopleSection
            ? "Off Developers Section"
            : "On Developers Section"}
        </Button>
        <Box width="20%" display="flex" justifyContent="space-around  ">
          <IconButton onClick={handleOpenModal} aria-label="add">
            <AddCircleOutlineIcon />
            Add
          </IconButton>
          <Button
            disabled={isDisabledButton()}
            onClick={handleSave}
            variant="contained"
            color="primary"
          >
            Save
          </Button>
        </Box>
      </Box>

      <hr />
      {usersList &&
        usersList.map((user, index) => (
          <CardDnd
            key={user.id + user.name}
            id={user.id}
            index={index}
            moveCard={moveCard}
          >
            <UserCard
              user={user}
              handleDeleteUser={handleDeleteUser}
              handleChangeUserInfo={handleChangeUserInfo}
              handleUpload={handleUpload}
            />
          </CardDnd>
        ))}
      <AddUserModal
        open={openModal}
        handleClose={handleCloseModal}
        handleAddUser={handleAddUser}
      />
      <UploadImageModal
        open={openUpload}
        handleClose={handleCloseUploadModal}
        handleUploadImage={handleUploadImage}
        uploadId={uploadId}
        selectKey={"People"}
      />
    </>
  );
};

export default React.memo(People);
