import { Injectable } from "@nestjs/common";
import * as Wifi from "wifi-control";

@Injectable()
export class WifiService
{
    constructor()
    {
        Wifi.init({
            connectionTimeout: 15000
        });
    }

    scan = () => 
    {
        return new Promise<Wifi.ScanForWiFiResponse>((resolve, reject) => {
            Wifi.scanForWiFi((err, response) => {
                !!err 
                    ? reject(err)
                    : resolve(response);
            });
        });
    }
}
