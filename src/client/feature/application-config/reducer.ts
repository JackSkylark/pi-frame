import * as Redux from "redux";
import { buildActionCreators } from "./action";
import { isActionOf } from "typesafe-actions";
import { ApplicationConfig } from "./model";

export type ApplicationConfigState = {
    isLoading: boolean;
    error?: string;
    value: ApplicationConfig;
}

const INITIAL_STATE: ApplicationConfigState =
{
    isLoading: false,
    value: null
}

export function buildReducer(
    actions: ReturnType<typeof buildActionCreators>
)
{
    const reducer: Redux.Reducer<ApplicationConfigState> = (
        state = INITIAL_STATE,
        action
    ) =>
    {
        if (isActionOf([actions.fetchAppConfig.request], action))
        {
            return {
                ...state,
                isLoading: true
            }
        }

        if (isActionOf([actions.fetchAppConfig.success], action))
        {
            return {
                ...state,
                isLoading: false,
                value: action.payload
            }
        }

        if (isActionOf([actions.fetchAppConfig.failure], action))
        {
            return {
                ...state,
                isLoading: false,
                error: action.payload.message
            }
        }

        return state;
    }

    return reducer;
}
