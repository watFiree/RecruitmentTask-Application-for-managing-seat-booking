import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainView from "./views/Main";
import ReserveSeatsView from "./views/ReserveSeats";
import SummaryView from "./views/Summary";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { fetchSeatsFromDatabase } from "./app/seatsSlice";
import * as serviceWorker from "./serviceWorker";
import "antd/dist/antd.css";

store.dispatch(fetchSeatsFromDatabase());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={MainView} />
          <Route exact path="/reserve" component={ReserveSeatsView} />
          <Route exact path="/summary" component={SummaryView} />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
