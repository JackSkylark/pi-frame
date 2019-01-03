import { AppConfigProvider } from "../appconfig/appconfig.provider"; 
import { Injectable, OnModuleInit } from "@nestjs/common";

@Injectable()
export class ImageSyncService implements OnModuleInit
{
    constructor(
        private readonly appConfigProvider: AppConfigProvider
    )
    {}

    async onModuleInit() 
    {
        await this.scheduleNextJob()
    }

    async runJob()
    {
        console.log("DO THE THING!");
        await this.scheduleNextJob();
    }

    async scheduleNextJob()
    {
        const { syncDelay } = await this.appConfigProvider.get();
        setTimeout(
            this.runJob, 
            syncDelay
        );
    }
}
