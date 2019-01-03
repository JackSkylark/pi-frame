import * as fs from "fs";

export async function canAccessFile(
    path: string)
{
    if (!path)
    {
        return false;
    }

    return new Promise<boolean>((resolve, reject) => {
        fs.access(path, (err) => {
            if (err)
            {
                resolve(false);
            }
            else
            {
                resolve(true)
            }
        });
    });    
};

export async function getFileContent(
    path: string
)
{
    return new Promise<string>((resolve, reject) => {
        fs.readFile(path, "utf8", (err, data) => {
            return err
                ? reject(err)
                : resolve(data);
        });
    });
}
