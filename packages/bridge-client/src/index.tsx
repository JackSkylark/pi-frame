import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ReactRouter from "react-router";
import "@pi-frame/css-reset/reset.css";
import "./index.less";

import Welcome from "./pages/welcome";

const Main = () => 
    <div>
        Hello World!
        <Welcome />
    </div>;

ReactDOM.render(<Main />, document.getElementById("app"));
