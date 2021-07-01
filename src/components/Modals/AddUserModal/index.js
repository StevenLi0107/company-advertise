import React, { memo } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import { FormControl, TextField, Typography } from '@material-ui/core';

const StyledDialogContent = withStyles((theme) => ({
  root: {
    padding: 0,

    '&::-webkit-scrollbar': {
      width: 4,
      borderRadius: 4,
    },
    '&::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '4px',
      backgroundColor: '#0B89D1',
    },
  },
}))(DialogContent);

const StyledDialogActions = withStyles((theme) => ({
  root: {
    padding: 0,
  },
}))(DialogActions);

const StyledDialog = withStyles((theme) => ({
  paper: {
    padding: '33px 48px 26px',
    borderRadius: 10,
    width: 428,
  },
}))(Dialog);

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'transparent',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  formControl: {
    margin: '8px 8px 8px 0px',
  },
  logo: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 56,
  },
  title: {
    fontSize: 24,
    letterSpacing: '0.048px',
    color: '#536886',
    fontWeight: 700,
  },
  createButton: {
    marginTop: theme.spacing(2),
    width: '100%',
    padding: '8px 16px',
    marginBottom: theme.spacing(6),
  },
  bottomTitle: {
    fontSize: 12,
    color: '#A9B3C2',
    textAlign: 'center',
    padding: '1px 0',
  },
  link: {
    color: '#536886',
    textDecoration: 'none',
  },
  textField: {
    '& input': {
      color: theme.palette.text.secondary,
      padding: '12px 16px',
      fontSize: 14,
      '&::placeholder': {
        color: '#576883',
        opacity: 0.6,
      },
    },
  },
}));

export const AddUserModal = memo(({ open, handleClose, handleAddUser }) => {
  const classes = useStyles();

  const initialFormState = {
    firstName: '',
    lastName: '',
    role: '',
    url: '',
  };

  const [formState, setFormstate] = React.useState(initialFormState);

  const { firstName, lastName, role } = formState;

  const handleChange = React.useCallback(
    ({ target: { name, value } }) => {
      setFormstate({ ...formState, [name]: value });
    },
    [formState],
  );

  const onSubmit = () => {
    const newUser = {
      id: Date.now(),
      ...formState,
    };
    handleClose();
    handleAddUser(newUser);
  };

  return (
    <StyledDialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="sm"
      fullWidth
      onClose={handleClose}>
      <Box mb="16px" display="flex" justifyContent="center">
        <Typography className={classes.title}>Add User</Typography>
      </Box>

      <StyledDialogContent>
        <form className={classes.form} noValidate>
          <FormControl className={classes.formControl}>
            <TextField
              className={classes.textField}
              variant="outlined"
              size="medium"
              name="firstName"
              onChange={handleChange}
              value={firstName}
              placeholder="First Name"
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <TextField
              className={classes.textField}
              variant="outlined"
              size="medium"
              name="lastName"
              onChange={handleChange}
              value={lastName}
              placeholder="Last Name"
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <TextField
              className={classes.textField}
              variant="outlined"
              size="medium"
              name="role"
              onChange={handleChange}
              value={role}
              placeholder="role"
            />
          </FormControl>
        </form>
      </StyledDialogContent>
      <StyledDialogActions>
        <Button
          className={classes.createButton}
          disableElevation
          variant="contained"
          color="primary"
          onClick={onSubmit}>
          Add
        </Button>
      </StyledDialogActions>
    </StyledDialog>
  );
});
