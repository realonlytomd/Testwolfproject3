import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chores from "./pages/Chores";
import Detail from "./pages/Detail";
import Users from "./pages/Users";
import DetailUser from "./pages/DetailUser";
import NoMatch from "./pages/NoMatch";
import About from "./pages/About";

const App = () =>
  <Router>
    <div>
      
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/chores" component={Chores} />
        <Route exact path="/chores/:id" component={Detail} />   
        <Route exact path="/users" component={Users} />
        <Route exact path="/users/:id" component={DetailUser} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
