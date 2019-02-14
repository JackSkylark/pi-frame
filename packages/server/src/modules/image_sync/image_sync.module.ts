import { Module } from "@nestjs/common";
import { ImageSyncService } from "./image_sync.service";
import { AppConfigModule } from "../appconfig/appconfig.module";


@Module({
    imports: [ AppConfigModule ],
    providers: [ ImageSyncService ]
})
export class ImageSyncModule
{}
