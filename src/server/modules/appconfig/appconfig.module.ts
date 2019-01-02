import { Module } from "@nestjs/common";
import { AppConfigProvider } from "./appconfig.provider";
import { AppConfigController } from "./appconfig.controller";

@Module({
    controllers: [ AppConfigController ],
    providers:[ AppConfigProvider ],
    exports: [ AppConfigProvider ]
})
export class AppConfigModule
{}
