import { Module } from '@nestjs/common';
import { ValueProvider } from '@nestjs/common/interfaces';
import * as Path from "path";
import { WifiModule } from "./wifi/wifi.module";
import { ImageModule } from './image/image.module';
import { AppConfigModule } from './appconfig/appconfig.module';
import { ImageSyncModule } from './image_sync/image_sync.module';

const appConfigPathProvider: ValueProvider = {
    provide: "APP_CONFIG_PATH",
    useValue: Path.join(__dirname, "app.config.json")
}

@Module({
    imports: [ WifiModule, ImageModule, AppConfigModule, ImageSyncModule ],
    providers: [ appConfigPathProvider ],
    exports: [ appConfigPathProvider ]
})
export class ApplicationModule
{}
