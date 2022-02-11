import React from "react";
import { Switch, Route } from "react-router-dom";
import AdminDetails from "./views/AdminDetails";
import Login from "./views/Login";
import MainPage from "./views/MainPage";
import ApplyForJob from "./components/ApplyForJob";
import DevelopersPage from "./views/DevelopersPage";
import PrivateRoute from "./components/PrivateRoute";

const AppRoutes = () => {
  return (
    <Switch>
      <PrivateRoute path="/admin" component={AdminDetails} />
      <Route path="/login" render={(props) => <Login {...props} />} />
      <Route path="/apply" render={(props) => <ApplyForJob {...props} />} />
      <Route path="/developers" exact component={DevelopersPage} />
      <Route path="/" render={(props) => <MainPage {...props} />} />
    </Switch>
  );
};

export default AppRoutes;
