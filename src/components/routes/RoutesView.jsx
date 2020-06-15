import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  HomeContainer,
  AllCampusesContainer,
  CampusContainer,
  AddCampusFormContainer,
  EditCampusFormContainer,
  AllStudentsContainer,
  AddStudentContainer,
  SingleStudentContainer,
  EditStudentFormContainer
} from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/campuses" component={AllCampusesContainer} />
      <Route exact path="/campuses/new" component={AddCampusFormContainer} />
      <Route exact path="/campuses/:id" component={CampusContainer} />
      <Route
        exact
        path="/campuses/:id/edit"
        component={EditCampusFormContainer}
      />
      <Route exact path="/students" component={AllStudentsContainer} />
      <Route exact path="/students/new" component={AddStudentContainer} />
      <Route exact path="/students/:id" component={SingleStudentContainer} />
      <Route
        exact
        path="/students/:id/edit"
        component={EditStudentFormContainer}
      />
    </Switch>
  );
};

export default RoutesView;
