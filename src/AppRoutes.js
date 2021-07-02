import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AdminDetails from './views/AdminDetails';
import Login from './views/Login';
import MainPage from './views/MainPage';
import ApplyForJob from './components/ApplyForJob';

const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/admin" render={(props) => <AdminDetails {...props} />} />
      <Route path="/login" render={(props) => <Login {...props} />} />
      <Route path="/apply" render={(props) => <ApplyForJob {...props} />} />
      <Route path="/" render={(props) => <MainPage {...props} />} />
    </Switch>
  );
};

export default AppRoutes;
