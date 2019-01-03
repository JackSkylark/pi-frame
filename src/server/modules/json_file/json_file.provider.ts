import * as fs from "fs";
import { Injectable } from "@nestjs/common";
import { canAccessFile, getFileContent } from "../../utilities/fileUtilities";

@Injectable()
export class JsonFileProvider
{
    public async getJsonFile(path: string)
    {
        return new JsonFile(path);
    }
}

export class JsonFile
{
    constructor(
        private readonly path: string
    )
    {        
    }

    public async hasAccess()
    {
        return await canAccessFile(this.path);
    }

    public async get<T>()
    {
        const fileBytes = await getFileContent(this.path);
        const json: T = JSON.parse(fileBytes);
        return json;
    }

    public async getRaw()
    {
        return await getFileContent(this.path);
    }

    public async write<T>(obj: T)
    {
        var json = JSON.stringify(obj);

        return new Promise<T>((resolve, reject) =>
        {
            fs.writeFile(
                this.path, 
                json, 
                {
                    encoding: "utf8"
                }, 
                (err) => {
                    err 
                        ? reject(err)
                        : resolve(obj)
                }
            );
        });
    }
}
