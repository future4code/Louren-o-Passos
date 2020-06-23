import React from "react";
import { Switch, Route, BrowserRouter, useHistory } from "react-router-dom";
import HomePage from "./components/HomePage";
import ApplicationFormPage from "./components/ApplicationFormPage";
import LoginPage from "./components/LoginPage";
import CreateTripPage from "./components/CreateTripPage";
import ListTripsPage from "./components/ListTripsPage";
import TripDetailPage from "./components/TripDetalPage";

function Router(props) {
 
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/formulariocandidato">
            <ApplicationFormPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/criarviagem">
            <CreateTripPage />
          </Route>
          <Route exact path="/listarviagens">
            <ListTripsPage />
          </Route>
          <Route exact path="/detalhesdaviagem/:viagemid">
            <TripDetailPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Router;
