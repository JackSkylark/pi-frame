import { AxiosInstance } from "axios";
import { ListFilesResponse } from "./model";
import { BinaryData } from "fs";

export class DropboxApiClient
{
    constructor(
        private readonly client : AxiosInstance
    )
    {}

    public async listFiles(
        path: string,
        limit = 2000,
        recursive = false,
        includeMediaInfo = false,
        includeDeleted = false,
        includeHasExplicitSharedMembers = false,
        includeMountedFolders = false)
    {
        const endpoint = "files/list_folder";
        const { data } = await this.client.post<ListFilesResponse>(endpoint, {
            "path": path,
            "limit": limit,
            "recursive": recursive,
            "include_media_info": includeMediaInfo,
            "include_deleted": includeDeleted,
            "include_has_explicit_shared_members": includeHasExplicitSharedMembers,
            "include_mounted_folders": includeMountedFolders
        });

        return data;
    }

    public async downloadFile(
        path: string
    )
    {
        const endpoint = "files/download";
        const { data } = await this.client.post<BinaryData>(endpoint, {}, {
            headers: {
                "Dropbox-API-Arg": JSON.stringify({
                    path: `/${path}`
                })
            }
        });

        return data;
    }
}
