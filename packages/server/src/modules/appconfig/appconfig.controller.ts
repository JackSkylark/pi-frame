import { Controller, Get, Req, UseGuards, Post } from "@nestjs/common";
import { AppConfigProvider } from "./appconfig.provider";
import { AppConfig } from "./model";

@Controller("config")
export class AppConfigController {
    constructor(
        private readonly appConfigProvider: AppConfigProvider
    ){}

    @Get()
    async getAppConfig()
    {
        var config = await this.appConfigProvider.get();
        return config;
    }

    @Post()
    async saveAppConfig(
        model: AppConfig
    )
    {
        return await this.appConfigProvider.updateConfig(model);
    }
}