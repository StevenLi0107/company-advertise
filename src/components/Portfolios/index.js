import React from 'react';
import { IconButton, Box, Button } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import PortfolioCard from './PortfolioCard';
import { useStyles } from './styles';
import { mock } from './mock';
import { CardDnd } from '../CardDnd';

const Portfolios = () => {
  const [formState, setFormState] = React.useState(mock);
  const classes = useStyles();

  const handleDeletePortfolio = React.useCallback(
    (id) => {
      const newPortfolioList = formState.filter((user) => user.id !== id);
      setFormState(newPortfolioList);
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
        <IconButton aria-label="add">
          <AddCircleOutlineIcon />
          Add
        </IconButton>
        <Button variant="contained" color="primary">
          Save
        </Button>
      </Box>

      <hr />
      <Box className={classes.content}>
        {formState.map((portfolio, index) => (
          <CardDnd
            key={portfolio.id + portfolio.title}
            id={portfolio.id}
            index={index}
            moveCard={moveCard}>
            <PortfolioCard
              portfolio={portfolio}
              handleDeletePortfolio={handleDeletePortfolio}
            />
          </CardDnd>
        ))}
      </Box>
    </>
  );
};

export default Portfolios;
