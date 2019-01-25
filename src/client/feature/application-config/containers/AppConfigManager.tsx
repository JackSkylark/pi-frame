import * as React from "react";
import * as Redux from "redux";
import * as ReactRedux from "react-redux";
import { ApplicationConfigState } from "../reducer";
import { buildActionCreators } from "../action";

export function buildAppConfigManager<State>(
    stateSelector: (state: State) => ApplicationConfigState,
    actions: ReturnType<typeof buildActionCreators>
)
{
    function mapStateToProps(state: State)
    {
        const appConfigState =  stateSelector(state);
        return {
            showLoading: appConfigState.isLoading || (!appConfigState.error && !appConfigState.value),
            shouldFetchConfig: !appConfigState.value && !appConfigState.isLoading &&  !appConfigState.error,
        }
    }

    function mapDispatchToProps(dispatch: Redux.Dispatch)
    {
        return {
            fetchAppConfig: () => dispatch(actions.fetchAppConfig.request({}))
        }
    }

    type Props = ReturnType<typeof mapStateToProps>
    & ReturnType<typeof mapDispatchToProps>;

    class AppConfigManager extends React.Component<Props>
    {
        componentDidMount()
        {
            this.handleShouldFetch(this.props);
        }

        componentDidUpdate()
        {
            this.handleShouldFetch(this.props);
        }

        render()
        {
            if (this.props.showLoading)
            {
                return (
                    "Loading..."
                );
            }

            return this.props.children;
        }

        private handleShouldFetch(props: Props)
        {
            const { shouldFetchConfig, fetchAppConfig } = this.props;
            if (shouldFetchConfig)
            {
                fetchAppConfig();
            }
        }
    }

    return ReactRedux.connect(
        mapStateToProps,
        mapDispatchToProps
    )(AppConfigManager);
}

