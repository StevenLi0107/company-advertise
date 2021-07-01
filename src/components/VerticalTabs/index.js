import React, { Suspense } from 'react';
import { useHistory, useLocation, Switch, Route } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles, ThemeProvider } from '@material-ui/core/styles';
import { useStyles, theme } from './styles';

const StyledListItem = withStyles((theme) => {
  return {
    root: {
      fontSize: 16,
      color: '#576883',
      width: 232,
      '&:hover': {
        backgroundColor: '#E0F3FF',
      },
      padding: '10px 37px',
      borderLeft: (props) =>
        props.selected ? '3px solid #008AD7' : '3px solid transparent',
    },
    selected: {
      backgroundColor: '#FFF !important',
      color: '#008AD7',
      fontWeight: 'bold',
    },
  };
})(ListItem);

const StyledListItemText = withStyles((theme) => {
  return {
    primary: {
      fontSize: 16,
      fontWeight: (props) => (props.selected ? 'bold' : 'normal'),
      color: (props) => (props.selected ? '#008AD7' : '#576883'),
    },
  };
})(ListItemText);

export default function VerticalTabs({ tabs }) {
  const classes = useStyles();
  const history = useHistory();
  const { pathname } = useLocation();

  const gotoRoute = (path) => {
    history.push(path);
  };

  return (
    <Suspense fallback={<></>}>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <List>
            {tabs.map((tab, tabIndex) => (
              <StyledListItem
                button
                key={tabIndex}
                selected={pathname === tab.link}
                onClick={() => gotoRoute(tab.link)}>
                <StyledListItemText
                  selected={pathname === tab.link}
                  primary={tab.label}
                />
              </StyledListItem>
            ))}
          </List>
          <div className={classes.container}>
            <Suspense
              fallback={<CircularProgress style={{ margin: 'auto' }} />}>
              <Switch>
                {tabs.map((tab) => (
                  <Route
                    path={tab.link}
                    key={tab.link}
                    exact
                    render={() => tab.component}
                  />
                ))}
              </Switch>
            </Suspense>
          </div>
        </div>
      </ThemeProvider>
    </Suspense>
  );
}
