import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./styles.css";

const Timeline = lazy(() => import("./page/Timeline"));
const Register = lazy(() => import("./page/Register"));
const Login = lazy(() => import("./page/Login"));

const App = () => {
  return (
    <Suspense fallback={<div>loading..</div>}>
      <Switch>
        <Route exact path="/" component={Timeline} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Suspense>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
