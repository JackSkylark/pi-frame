import { createAsyncAction } from "typesafe-actions";
import { ApplicationConfig } from "./model";

export function buildActionCreators(
    namespace = "@@app-config"
)
{
    const fetchAppConfig = createAsyncAction(
        `${namespace}/fetch-request`,
        `${namespace}/fetch-success`,
        `${namespace}/fetch-failure`
    )<{}, ApplicationConfig, Error>();

    const updateAppConfig = createAsyncAction(
        `${namespace}/create-request`,
        `${namespace}/fe-success`,
        `${namespace}/fetch-failure`
    )<Partial<ApplicationConfig>, ApplicationConfig, Error>();

    return {
        fetchAppConfig,
        updateAppConfig
    };
}
