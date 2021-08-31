import { Switch, Route, BrowserRouter } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import AdminHomePage from "../../pages/AdminHomePage/AdminHomePage"
import ApplicationFormPage from "../../pages/ApplicationFormPage/ApplicationFormPage";
import TripDetailsPage from "../../pages/TripDetailsPage/TripDetailsPage";
import CreateTripPage from "../../pages/CreateTripPage/CreateTripPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import ListTripsPage from "../../pages/ListTripsPage/ListTripsPage";
import Error from "../../pages/ErrorPage/ErrorPage";

export default function RouteManager() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>

        <Route exact path={"/trips/list"}>
          <ListTripsPage />
        </Route>

        <Route exact path={"/trips/application"}>
          <ApplicationFormPage />
        </Route>

        <Route exact path={"/login"}>
          <LoginPage e />
        </Route>

        <Route exact path={"/admin/trips/list"}>
          <AdminHomePage />
        </Route>

        <Route exact path={"/admin/trips/create"}>
          <CreateTripPage />
        </Route>

        <Route exact path={"/admin/trips/:id"}>
          <TripDetailsPage />
        </Route>

        <Route>
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}