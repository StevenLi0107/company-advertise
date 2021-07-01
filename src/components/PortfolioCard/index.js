import React from 'react';
import { useStyles } from './styles';
import { Typography, Box, TextField } from '@material-ui/core';
import ListItem from '../ListItem';

const PortfolioCard = ({ portfolio, handleDeletePortfolio }) => {
  const [formState, setFormstate] = React.useState(portfolio);
  const [isEditing, setIsEditing] = React.useState(false);
  const classes = useStyles();

  const { title, description } = formState;

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
      id={portfolio.id}
      handleDelete={handleDeletePortfolio}
      handleEdit={handleEdit}>
      <Box display="flex" flexDirection="column">
        {isEditing ? (
          <Box display="flex" alignItems="center">
            <TextField
              variant="outlined"
              size="small"
              name="title"
              onChange={handleChange}
              value={title}
              placeholder="title"
            />
            <TextField
              variant="outlined"
              size="small"
              name="description"
              onChange={handleChange}
              value={description}
              placeholder="description"
            />
          </Box>
        ) : (
          <>
            <Typography>{title}</Typography>
            <span className={classes.subtitle}>{description}</span>
          </>
        )}
      </Box>
    </ListItem>
  );
};

export default PortfolioCard;
