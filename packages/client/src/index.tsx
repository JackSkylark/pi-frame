import * as React from "react";
import * as ReactDOM from "react-dom";
import "@pi-frame/css-reset/reset.css";
import "./index.less";

const Main = () => 
    <div>
        Hello World
    </div>;

ReactDOM.render(<Main />, document.getElementById("app"));
