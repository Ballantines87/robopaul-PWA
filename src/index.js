import React from "react";
import ReactDOM from "react-dom/client";
import { Provider} from "react-redux";
import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "tachyons";
import App from "../src/containers/App";
import { searchRobots, requestRobots } from "./reducers";
import {createLogger} from "redux-logger";
import thunkMiddleware  from "redux-thunk";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


const rootReducer = combineReducers({searchRobots, requestRobots});
const logger = createLogger();
const store = legacy_createStore(rootReducer,  applyMiddleware(thunkMiddleware, logger));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


serviceWorkerRegistration.register();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
