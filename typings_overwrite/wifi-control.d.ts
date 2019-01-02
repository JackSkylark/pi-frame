declare module "wifi-control"
{
    type Settings = {
        debug?: boolean;
        iface?: string;
        connectionTimeout?: number;
    }

    type Network = {
        mac: string;
        channel : number;
        signal_level: number;
        ssid: string;
    }

    type ScanForWiFiResponse = {
        success: boolean;
        networks: Network[];
    }

    interface CallbackFunc<T>  
    {
        (err: string, response: T) : void;
    }

    export function init(settings: Settings): void;
    export function configure(settings: Settings): void;
    export function scanForWiFi(callback: CallbackFunc<ScanForWiFiResponse>): void;
    
    type GetIFaceStateResponse = {
        success: boolean;
        msg: string;
        ssid: string;
        connection: string;
        power: boolean;
    }
    
    export function getIfaceState(): {

    }; 
}