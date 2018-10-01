import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
//import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  withRouter
} from "react-router-dom";
import List from "./containers/List";
import Infor from "./containers/Infor";
import Mech from "./containers/Mech";
import Org from "./containers/Org";

import store from "./redux/store";
import App from "./containers/App";

render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={App} />
        <Route exact={true} path="/list" component={List} />
        <Route exact={true} path="/mech" component={Mech} />
        <Route exact={true} path="/infor" component={Infor} />
        <Route exact={true} path="/org" component={Org} />
      </Switch>
    </BrowserRouter>
    {/* <App /> */}
  </Provider>,
  document.getElementById("root")
);
