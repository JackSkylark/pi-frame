import { buildActionCreators } from "./action";
import { ApplicationConfigState, buildReducer } from "./reducer";
import { buildContainers } from "./containers";

type ApplicationConfigModuleOptions<State> = {
    namespace?: string;
    stateSelector: (state: State) => ApplicationConfigState;
}

export {
    ApplicationConfigState
}

export function buildModule<State>(
    options: ApplicationConfigModuleOptions<State>
)
{
    const reduxActionCreators = buildActionCreators(options.namespace);
    const reducer = buildReducer(reduxActionCreators);
    const containers = buildContainers(options.stateSelector, reduxActionCreators);

    return {
        reduxActionCreators,
        reducer,
        containers
    }
}
