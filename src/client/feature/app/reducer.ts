import * as Redux from "redux";
import { ApplicationConfigState } from "../application-config";

export type State = {
    config: ApplicationConfigState
}

export function buildReducer(
    appConfigReducer : Redux.Reducer<ApplicationConfigState>
)
{
    const reducers: Redux.ReducersMapObject<State> = {
        config: appConfigReducer
    }

    return Redux.combineReducers(reducers);
}
