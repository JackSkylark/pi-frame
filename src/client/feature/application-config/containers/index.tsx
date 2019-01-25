import { buildAppConfigManager } from "./AppConfigManager";
import { ApplicationConfigState } from "../reducer";
import { buildActionCreators } from "../action";

export function buildContainers<State>(
    stateSelector: (state: State) => ApplicationConfigState,
    actions: ReturnType<typeof buildActionCreators>
)
{
    const AppConfigManager = buildAppConfigManager(stateSelector, actions);

    return {
        AppConfigManager
    }
}
