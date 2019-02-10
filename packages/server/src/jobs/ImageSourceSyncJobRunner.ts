import { AppConfigProvider } from "../modules/appconfig/appconfig.provider"; 
import { Injectable } from "@nestjs/common";

@Injectable()
export class ImageSourceSyncJobRunner
{
    constructor(
        private readonly appConfigProvider: AppConfigProvider
    )
    {}

    async runJob()
    {
        const appConfig = await this.appConfigProvider.get();
        setTimeout(() => {
            console.log("Do the thing!");
            this.runJob();
        }, appConfig.syncDelay)
    }
}
