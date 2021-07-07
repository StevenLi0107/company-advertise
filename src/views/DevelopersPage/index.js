import React from 'react';
import { useSelector } from 'react-redux';
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Avatar,
} from '@material-ui/core';
import { useStyles } from './styles';

const DevelopersPage = () => {
  const usersList = useSelector((state) => state.adminReducer.usersList);
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography className={classes.title}>OUR DEVELOPERS:</Typography>
      <Box display="flex" alignItems="center" flexDirection="column">
        {usersList &&
          usersList.map((user) => (
            <Box className={classes.card}>
              <Avatar className={classes.avatar} src={user.url} />
              <Typography gutterBottom variant="h5" component="h2">
                {user.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {user.role}
              </Typography>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default DevelopersPage;
