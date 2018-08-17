import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import history from "./history";
import reducers from "./reducers";
import App from "./scenes/App";
import Search from "./Search";

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App>
        <Route path="/" exact component={Search} />
      </App>
    </Router>
  </Provider>,
  document.querySelector("#root")
);
