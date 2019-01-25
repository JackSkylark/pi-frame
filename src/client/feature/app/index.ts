import * as ApplicationConfigModule from "../application-config";
import { State, buildReducer } from "./reducer";
import { buildMainComponent } from "./components/Main";

type ModuleConfig<S> = {
    stateSelector: (state: S) => State;
}

export {
    State
}

export function buildAppModule<S>(
    config: ModuleConfig<S>
)
{
    const appConfigModule = ApplicationConfigModule.buildModule({
        namespace: "@@config",
        stateSelector: (state: S) => config.stateSelector(state).config
    });

    const reducer = buildReducer(appConfigModule.reducer);

    const RootComponent = buildMainComponent(
        appConfigModule.containers.AppConfigManager);

    return {
        reducer,
        RootComponent
    }
}
