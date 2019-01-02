import { Module } from "@nestjs/common";
import { WifiController } from "./wifi.controller";
import { WifiService } from "./wifi.service";

@Module({
    controllers: [WifiController],
    providers: [WifiService]
})
export class WifiModule {}
