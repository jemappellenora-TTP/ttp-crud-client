import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  HomeContainer,
  AllCampusesContainer,
  CampusContainer,
  AddCampusFormContainer,
  EditCampusFormContainer,
  AllStudentsContainer,
  AddStudentContainer
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

    </Switch>
  );
};

export default RoutesView;
