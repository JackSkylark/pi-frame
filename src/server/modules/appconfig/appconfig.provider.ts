import { Injectable, Inject, OnModuleInit } from "@nestjs/common";
import * as Path from "path";
import { promises as Fs } from "fs";
import { AppConfig } from "./model";
import { APP_CONFIG_PATH } from "../../constants";

const defaultAppConfig: AppConfig = 
{
    imageDirectoryPath: Path.join(__dirname, "images"),
    syncDelay: 1000
}

@Injectable()
export class AppConfigProvider implements OnModuleInit
{
    private readonly appConfigPath: string = APP_CONFIG_PATH;
    private fileIsValid: boolean = false;
    private config: AppConfig = defaultAppConfig;

    async onModuleInit() 
    {
        if (await canAccessFile(this.appConfigPath))
        {
            this.fileIsValid = true;
            this.config = await getConfigViaFileOrDefault(
                this.appConfigPath, 
                defaultAppConfig);
        }
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
            var jsonString = JSON.stringify(this.config);
            Fs.writeFile(this.appConfigPath, jsonString, {
                encoding: "utf8"
            });
        }

        return this.config;
    }
}

async function canAccessFile(
    path: string)
{
    if (!path)
    {
        return false;
    }

    return new Promise((resolve, reject) => {
        Fs.access(path)
            .then(() => resolve(true))
            .catch(() => resolve(false));
    });    
}

async function getConfigViaFileOrDefault(
    pathToFile: string, 
    defaultAppConfig: AppConfig): Promise<AppConfig>
{
    try
    {
        const fileBytes = await Fs.readFile(pathToFile, "utf8");
        const json: AppConfig = JSON.parse(fileBytes);

        if (!json)
        {
            return defaultAppConfig
        }
        
        return {
            imageDirectoryPath: json.imageDirectoryPath || defaultAppConfig.imageDirectoryPath,
            syncDelay: json.syncDelay || defaultAppConfig.syncDelay
        }            
    }
    catch (e)
    {
        return defaultAppConfig
    }
}
