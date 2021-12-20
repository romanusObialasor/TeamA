import React from "react";
import AdminOverview from "./AdminDashboard/Overview";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AdminProject from "./AdminDashboard/AdminProject";
import AdminMembersOverview from "./AdminDashboard/joe/AdminMembersOverview";
import AdminCreateProject from "./AdminDashboard/joe/AdminCreateProject";
import Landing from "./ESTHER/Landing";
import AdminSignIn from "./ESTHER/component/AdminSign";
import Company from "./ESTHER/component/RegisterCompany";
import userSignin from "./ESTHER/UserSignin";
import UserOverView from "./User/UserOverView";
import "react-calendar/dist/Calendar.css";
import UserProject from "./User/UserProject";
import Project from "./User/Project";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/userSignup" component={userSignin} />
          <Route exact path="/adminSign" component={AdminSignIn} />
          <Route exact path="/admin" component={AdminOverview} />
          <Route exact path="/project/:id" component={AdminProject} />
          <Route exact path="/members" component={AdminMembersOverview} />
          <Route exact path="/register" component={Company} />
          <Route exact path="/create" component={AdminCreateProject} />
          <Route exact path="/user" component={UserOverView} />
          <Route exact path="/userProject/:id" component={UserProject} />
          <Route exact path="/myProject" component={Project} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
