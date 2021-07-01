import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import AdminDetails from './views/AdminDetails';
import Login from './views/Login';
import MainPage from './views/MainPage';
import { createBrowserHistory } from 'history';
import ApplyForJob from './components/ApplyForJob';

const history = createBrowserHistory();

function App() {
  // React.useEffect(() => {
  //   history.push('/admin');
  // }, []);

  return (
    <Router history={history}>
      <Switch>
        <Route path="/admin" render={(props) => <AdminDetails {...props} />} />
        <Route path="/login" render={(props) => <Login {...props} />} />
        <Route path="/apply" render={(props) => <ApplyForJob {...props} />} />
        <Route path="/" render={(props) => <MainPage {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
