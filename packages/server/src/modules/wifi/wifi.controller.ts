import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { WifiService } from "./wifi.service";
import { LocalhostGuard } from "../../guards/localhost.guard";

@Controller("wifi")
export class WifiController {
    constructor(
        private readonly wifiService: WifiService
    ){}

    @Get()
    @UseGuards(LocalhostGuard)
    async scanAvailableConnections()
    {
        var connections = await this.wifiService.scan();
        return connections;
    }
}