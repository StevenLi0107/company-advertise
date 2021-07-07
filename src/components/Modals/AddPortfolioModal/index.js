import React, { memo } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Avatar, FormControl, TextField, Typography } from '@material-ui/core';

import { getBase64 } from '../../../utils/base64';

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
    display: 'flex',
    alignItems: 'center',
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
  avatar: {
    width: 150,
    height: 150,
    marginBottom: theme.spacing(2),
  },
  textField: {
    width: '100%',
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

export const AddPortfolioModal = memo(
  ({ open, handleClose, handleAddPortfolio }) => {
    const classes = useStyles();

    const initialFormState = {
      title: '',
      desc: '',
      img: '',
    };

    const [formState, setFormstate] = React.useState(initialFormState);
    const imgRef = React.useRef();

    const { title, desc, url } = formState;

    const handleChange = React.useCallback(
      ({ target: { name, value } }) => {
        setFormstate({ ...formState, [name]: value });
      },
      [formState],
    );

    const onSubmit = () => {
      const newPortfolio = {
        // id: Date.now(),
        name: formState.title,
        description: formState.desc,
        img: formState.img,
      };
      onClose();
      handleAddPortfolio(newPortfolio);
    };

    const handleUploadClick = () => {
      imgRef.current.click();
    };

    const handleAttachOnChange = () => {
      const _file = imgRef.current.files[0];
      getBase64(_file)
        .then((res) => {
          const file = URL.createObjectURL(_file);
          setFormstate({
            ...formState,
            url: file,
            img: res,
          });
        })
        .catch((e) => console.log(e));
    };

    const onClose = () => {
      setFormstate(initialFormState);
      handleClose();
    };

    return (
      <StyledDialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="sm"
        fullWidth
        onClose={onClose}>
        <Box mb="16px" display="flex" justifyContent="center">
          <Typography className={classes.title}>Add Portfolio</Typography>
        </Box>

        <StyledDialogContent>
          <form className={classes.form} noValidate>
            <FormControl className={classes.formControl}>
              <TextField
                className={classes.textField}
                variant="outlined"
                size="medium"
                name="title"
                onChange={handleChange}
                value={title}
                placeholder="Title"
              />
            </FormControl>
            <FormControl className={classes.formControl}>
              <TextField
                className={classes.textField}
                variant="outlined"
                size="medium"
                name="desc"
                onChange={handleChange}
                value={desc}
                placeholder="Description"
              />
            </FormControl>
            <FormControl className={classes.formControl}>
              <Avatar className={classes.avatar} src={url} />
              <input
                type="file"
                ref={imgRef}
                onChange={handleAttachOnChange}
                style={{
                  position: 'absolute',
                  visibility: 'hidden',
                }}
              />
              <Button
                disableElevation
                variant="contained"
                color="primary"
                onClick={handleUploadClick}>
                Upload Image
              </Button>
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
  },
);
