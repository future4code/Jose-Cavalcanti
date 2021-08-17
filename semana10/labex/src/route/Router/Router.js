import { Switch, Route, BrowserRouter } from "react-router-dom";
import { HomePage } from "../../pages/HomePage/HomePage";
import { TripListPage } from "../../pages/TripDetailsPage/TripDetailsPage";
import { AdminHomePage } from "../../pages/TripDetailsPage/TripDetailsPage"
import { CreateTripPage } from "../../pages/CreateTripPage/CreateTripPage";
import { LoginPage } from "../../pages/LoginPage/LoginPage";
import { TripDetalisPage } from "../../pages/TripDetailsPage/TripDetailsPage"
//import { Error } from "../pages/ErrorPage";

export function RouteManager() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <HomePage />
                </Route>

                <Route exact path={"/trips/list"}>
                    <TripListPage />
                </Route>

                <Route exact path={"/login"}>
                    <LoginPage />
                </Route>

                <Route exact path={"/admin/trips/list"}>
                    <AdminHomePage />
                </Route>

                <Route exact path={"/admin/trips/create"}>
                    <CreateTripPage />
                </Route>

                <Route exact path={"/admin/trips/:id"}>
                    <TripDetalisPage />
                </Route>

                {/* <Route>
                    <Error />
                </Route> */}
            </Switch>
        </BrowserRouter>
    )
}
export default RouteManager
