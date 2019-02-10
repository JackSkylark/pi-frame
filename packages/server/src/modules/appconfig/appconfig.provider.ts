import { Injectable, OnModuleInit } from "@nestjs/common";
import * as Path from "path";
import { AppConfig } from "./model";
import { APP_CONFIG_PATH } from "../../constants";
import { JsonFileProvider, JsonFile } from "../json_file/json_file.provider";

const defaultAppConfig: AppConfig = 
{
    imageDirectoryPath: Path.join(__dirname, "images"),
    syncDelay: 1000
}

@Injectable()
export class AppConfigProvider implements OnModuleInit
{
    private jsonFile: JsonFile;
    private readonly appConfigPath: string = APP_CONFIG_PATH;
    private fileIsValid: boolean = false;
    private config: AppConfig = defaultAppConfig;

    constructor(
        private readonly jsonFileProvider: JsonFileProvider
    )
    {
    }   

    async onModuleInit() 
    {
        this.jsonFile = await this.jsonFileProvider.getJsonFile(
            this.appConfigPath);

        this.fileIsValid = await this.jsonFile.hasAccess();
        this.config = this.fileIsValid
            ? await this.jsonFile.get<AppConfig>()
            : defaultAppConfig;
    }

    get = async () => 
    {
        return this.config;
    }

    updateConfig = async (updates: Partial<AppConfig>) =>
    {
        this.config = {...this.config, ...updates};
        if(this.fileIsValid)
        {
            await this.jsonFile.write(this.config);
        }

        return this.config;
    }
}
