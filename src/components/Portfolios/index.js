import React from 'react';
import { IconButton } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import PortfolioCard from '../PortfolioCard';
import { useStyles } from './styles';
import { mock } from './mock';

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

  return (
    <>
      <IconButton aria-label="add">
        <AddCircleOutlineIcon />
        Add
      </IconButton>
      <hr />
      {formState.map((portfolio) => (
        <PortfolioCard
          key={portfolio.id + portfolio.title}
          portfolio={portfolio}
          handleDeletePortfolio={handleDeletePortfolio}
        />
      ))}
    </>
  );
};

export default Portfolios;
