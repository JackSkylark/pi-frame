import { buildAppModule } from "./feature/app";
import { RootReducerState } from "./store/root-reducer-state";

export default buildAppModule({
    stateSelector: (state: RootReducerState) => state.app
});
