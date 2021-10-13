import React from "react";
import { IconButton, Box, Button } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import PortfolioCard from "./PortfolioCard";
import { useStyles } from "./styles";
import { mock } from "./mock";
import { CardDnd } from "../CardDnd";
import { useSelector, useDispatch } from "react-redux";
import { AddPortfolioModal } from "../Modals/AddPortfolioModal";
import { UploadImageModal } from "../Modals/UploadImageModal";

import {
  addPortfolio,
  changePortfoliosOrder,
  deletePortfolio,
  savePortfoliosOrder,
  updatePortfolio,
  uploadImage,
} from "../../redux/actions/adminAction";
import { checkTokenValid } from "../../redux/actions/authAction";

const Portfolios = () => {
  const portfoliosList = useSelector(
    (state) => state.adminReducer.portfoliosList
  );
  const initialState = React.useRef();
  const [openModal, setOpenModal] = React.useState(false);
  const [openUpload, setOpenUpload] = React.useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();

  React.useEffect(() => {
    dispatch(checkTokenValid());
    initialState.current = portfoliosList;
  }, []);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleUpload = () => {
    setOpenUpload(true);
  };

  const handleCloseModal = React.useCallback(() => {
    setOpenUpload(false);
    setOpenModal(false);
  }, [openModal]);

  const handleDeletePortfolio = React.useCallback((id) => {
    dispatch(deletePortfolio(id));
  }, []);

  const handleAddPortfolio = React.useCallback((newPortfolio) => {
    dispatch(addPortfolio(newPortfolio));
  }, []);

  const handleUploadImage = React.useCallback((newImage) => {
    dispatch(uploadImage(newImage));
  }, []);

  const handleChangePortfolioInfo = React.useCallback((portfolio) => {
    dispatch(updatePortfolio(portfolio));
  }, []);

  const moveCard = React.useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = portfoliosList[dragIndex];

      const coppiedStateArray = [...portfoliosList];

      const prevItem = coppiedStateArray.splice(hoverIndex, 1, dragCard);

      coppiedStateArray.splice(dragIndex, 1, prevItem[0]);

      dispatch(changePortfoliosOrder(coppiedStateArray));
    },
    [portfoliosList]
  );

  const handleSave = () => {
    dispatch(savePortfoliosOrder(portfoliosList));
  };

  const isDisabledButton = React.useCallback(() => {
    if (!portfoliosList?.length || !initialState?.current?.length) return true;
    return (
      JSON.stringify(initialState.current) === JSON.stringify(portfoliosList)
    );
  }, [portfoliosList]);

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
          color="primary"
        >
          Save
        </Button>
      </Box>

      <hr />
      <Box className={classes.content}>
        {portfoliosList &&
          portfoliosList.map((portfolio, index) => (
            <CardDnd
              key={portfolio.id + portfolio.name}
              id={portfolio.id}
              index={index}
              moveCard={moveCard}
            >
              <PortfolioCard
                portfolio={portfolio}
                handleDeletePortfolio={handleDeletePortfolio}
                handleChangePortfolioInfo={handleChangePortfolioInfo}
                handleUpload={handleUpload}
              />
            </CardDnd>
          ))}
        <AddPortfolioModal
          open={openModal}
          handleClose={handleCloseModal}
          handleAddPortfolio={handleAddPortfolio}
        />
        <UploadImageModal
          open={openUpload}
          handleClose={handleCloseModal}
          handleUploadImage={handleUploadImage}
        />
      </Box>
    </>
  );
};

export default Portfolios;
