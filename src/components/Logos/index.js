import React from 'react';
import { Box, Button, IconButton } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { useStyles } from './styles';
import { mock } from './mock';
import { CardDnd } from '../CardDnd';
import LogoCard from './LogoCard';
import { useDispatch, useSelector } from 'react-redux';
import {
  addClient,
  changeClientsOrder,
  changeStatusOfLogosSection,
  deleteClient,
  saveClientsOrder,
  updateClient,
} from '../../redux/actions/adminAction';
import { AddClientModal } from '../Modals/AddClientModal';

export default function Logos() {
  // const [formState, setFormState] = React.useState(mock);
  const isActiveLogosSection = useSelector(
    (state) => state.adminReducer.isActiveLogosSection,
  );
  const clientsList = useSelector((state) => state.adminReducer.clientsList);
  const initialState = React.useRef();
  const [openModal, setOpenModal] = React.useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();

  React.useEffect(() => {
    initialState.current = clientsList;
  }, []);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = React.useCallback(() => {
    setOpenModal(false);
  }, [openModal]);

  const handleAddClient = React.useCallback((newClient) => {
    console.log(newClient);
    dispatch(addClient(newClient));
  }, []);

  const handleChangeClientInfo = React.useCallback((client) => {
    dispatch(updateClient(client));
  }, []);

  const handleDeleteCompany = React.useCallback((id) => {
    dispatch(deleteClient(id));
  }, []);

  const moveCard = React.useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = clientsList[dragIndex];

      const coppiedStateArray = [...clientsList];

      const prevItem = coppiedStateArray.splice(hoverIndex, 1, dragCard);

      coppiedStateArray.splice(dragIndex, 1, prevItem[0]);

      dispatch(changeClientsOrder(coppiedStateArray));
    },
    [clientsList],
  );

  const handleStatusLogosSection = () => {
    dispatch(changeStatusOfLogosSection(!isActiveLogosSection));
  };

  const handleSave = () => {
    dispatch(saveClientsOrder(clientsList));
  };

  const isDisabledButton = React.useCallback(() => {
    if (!clientsList?.length || !initialState?.current?.length) return true;
    return JSON.stringify(initialState.current) === JSON.stringify(clientsList);
  }, [clientsList]);

  return (
    <>
      <Box display="flex" justifyContent="space-between" height="40px">
        <Button
          onClick={handleStatusLogosSection}
          variant="contained"
          color="primary">
          {isActiveLogosSection ? 'Off Logos Section' : 'On Logos Section'}
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
            color="primary">
            Save
          </Button>
        </Box>
      </Box>

      <hr />
      {clientsList &&
        clientsList.map((company, index) => (
          <CardDnd
            key={company.id + company.companyName}
            id={company.id}
            index={index}
            moveCard={moveCard}>
            <LogoCard
              company={company}
              handleDeleteCompany={handleDeleteCompany}
              handleChangeClientInfo={handleChangeClientInfo}
            />
          </CardDnd>
        ))}
      <AddClientModal
        open={openModal}
        handleClose={handleCloseModal}
        handleAddClient={handleAddClient}
      />
    </>
  );
}
