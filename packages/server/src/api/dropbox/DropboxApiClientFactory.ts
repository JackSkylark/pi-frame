import Axios from "axios";
import { DropboxApiClient } from "./DropboxApiClient";

export class DropboxApiClientFactory 
{
    static buildViaAuthToken(
        token: string
    ): DropboxApiClient
    {
        const client = Axios.create({
            baseURL: "https://content.dropboxapi.com/2",
            headers: {
                "Authorization": "Bearer " + token
            }
        });

        return new DropboxApiClient(client);
    }
}
