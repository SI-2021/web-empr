import { Route, Switch } from "react-router";

//Pages
import Login from "../views/Login";
import Home from "../views/Home";
import Profile from "../views/Profile";
import Post from "../views/Post";
import Pay from "../views/Payments";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/perfil" component={Profile} />
      <Route path="/pagamentos" component={Pay} />
      <Route path="/postagem" component={Post} />
    </Switch>
  );
}
