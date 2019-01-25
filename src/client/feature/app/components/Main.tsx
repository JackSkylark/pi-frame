import * as React from "react";
import { buildAppConfigManager } from "../../application-config/containers/AppConfigManager";

type AppConfigManager = ReturnType<typeof buildAppConfigManager>;

export const buildMainComponent = (
    AppConfigManager: AppConfigManager
): React.SFC => () =>
    <AppConfigManager>

    </AppConfigManager>;
