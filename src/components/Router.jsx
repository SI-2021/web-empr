import { Route, Switch } from "react-router";
import Home from "../views/Home";

const Router = function() {

    return (
        <Switch>
            <Route exact path="/" component={Home}/>
        </Switch>
    );

}

export default Router;