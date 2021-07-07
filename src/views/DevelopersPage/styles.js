import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    background: '#FAFAFA',
    padding: 50,
  },
  card: {
    width: 300,
    height: 300,
    display: 'flex',
    alignItems: 'center',
    background: '#f8f1f1',
    flexDirection: 'column',
    marginTop: 50,
    padding: 30,
    borderRadius: 10,
  },
  avatar: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 52,
    fontFamily: 'Mercury Display, sans serif',
  },
}));
