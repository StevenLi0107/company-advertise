import React from 'react';
import { useStyles } from './styles';
import { Typography, Box, TextField, Avatar } from '@material-ui/core';
import ListItem from '../../ListItem';

const PortfolioCard = ({
  portfolio,
  handleDeletePortfolio,
  handleChangePortfolioInfo,
}) => {
  const [formState, setFormstate] = React.useState(portfolio);
  const [isEditing, setIsEditing] = React.useState(false);
  const classes = useStyles();

  const { name, description, url } = formState;

  const handleChange = React.useCallback(
    ({ target: { name, value } }) => {
      setFormstate({ ...formState, [name]: value });
    },
    [formState],
  );

  const handleEdit = () => {
    if (isEditing) {
      handleChangePortfolioInfo(formState);
    }
    setIsEditing(!isEditing);
  };

  return (
    <ListItem
      id={portfolio.id}
      handleDelete={handleDeletePortfolio}
      handleEdit={handleEdit}>
      <Box display="flex">
        <Avatar src={url} />
        <Box ml="10px" display="flex" flexDirection="column">
          {isEditing ? (
            <Box display="flex" alignItems="center">
              <TextField
                variant="outlined"
                size="small"
                name="name"
                onChange={handleChange}
                value={name}
                placeholder="Name"
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
              <Typography>{name}</Typography>
              <span className={classes.subtitle}>{description}</span>
            </>
          )}
        </Box>
      </Box>
    </ListItem>
  );
};

export default PortfolioCard;
