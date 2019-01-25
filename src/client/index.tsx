import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ReactRedux from "react-redux";
import { store, history } from "./store";
import AppModule from "./app.module";

const RootComponent: React.SFC = () =>
    <ReactRedux.Provider store={store}>
        <AppModule.RootComponent />
    </ReactRedux.Provider>

const appRootElement = document.createElement("div");
appRootElement.className = "app-root";
document.body.appendChild(appRootElement);

ReactDOM.render(
    <RootComponent />, 
    appRootElement);
