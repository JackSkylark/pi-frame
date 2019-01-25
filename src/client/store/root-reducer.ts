import * as Redux from "redux";
import { RootReducerState } from "./root-reducer-state";
import appModule from "../app.module";

const reducers: Redux.ReducersMapObject<RootReducerState> = 
{
    app: appModule.reducer
}

export default Redux.combineReducers(reducers);
