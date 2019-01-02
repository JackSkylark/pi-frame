import { Module } from "@nestjs/common";
import { ImageController } from "./image.controller";
import { ImageFilePathsProvider } from "./image.service";
import { AppConfigModule } from "../appconfig/appconfig.module";

@Module({
    controllers: [ ImageController ],
    providers: [ ImageFilePathsProvider ],
    imports: [ AppConfigModule ]
})
export class ImageModule {}
