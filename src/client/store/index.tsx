import * as Redux from "redux";
import rootReducer from "./root-reducer";
import History = require("history");

const history = History.createBrowserHistory();

const middlewares =
    Redux.applyMiddleware(

    );

const enhancer = Redux.compose(middlewares, getReduxTooling(window))
const store = Redux.createStore(rootReducer, enhancer);

export {
    history,
    store
}

function getReduxTooling(root: any)
{
    return root.devToolsExtension ? root.devToolsExtension() : (x: any) => x;
}
