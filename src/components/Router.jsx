import { Route, Switch } from "react-router";
import Home from "../views/Home";
import Login from "../views/Login";

const Router = function() {

    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login} />
        </Switch>
    );

}

export default Router;