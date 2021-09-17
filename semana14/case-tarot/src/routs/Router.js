import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "../Pages/HomePage"
import Table from "../Pages/TablePage"
import Error from "../Pages/ErrorPage"

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>

                <Route exact path="/">
                    <Home />
                </Route>

                <Route exact path="/table">
                    <Table />
                </Route>

                <Route>
                    <Error />
                </Route>

            </Switch>
        </BrowserRouter>
    )

}