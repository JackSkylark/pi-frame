import { Module } from "@nestjs/common";
import { AppConfigProvider } from "./appconfig.provider";
import { AppConfigController } from "./appconfig.controller";
import { JsonFileModule } from "../json_file/json_file.module";

@Module({
    controllers: [ AppConfigController ],
    providers:[ AppConfigProvider ],
    exports: [ AppConfigProvider ],
    imports: [ JsonFileModule ]
})
export class AppConfigModule
{}
