import { makeStyles, createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#008AD7',
    },
    secondary: {
      main: '#EFF0F3',
      contrastText: '#576883',
    },
    default: {
      main: '#4DCC0B',
    },
    text: {
      secondary: '#576883',
    },
  },
});

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100%',
  },
  container: {
    width: '100%',
    borderLeft: `1px solid ${theme.palette.divider}`,
    padding: 20,
  },
}));
