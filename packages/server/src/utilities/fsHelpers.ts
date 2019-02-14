import * as fs from "fs";
import * as path from "path";

export async function getFiles(
    dirPath: string,
    extensions?: string[]
)
{
    if (!canAccessFileOrDirectory(dirPath))
    {
        console.log("Directory Not Found", dirPath);
        return [];
    }

    var files = await fs.promises.readdir(dirPath);
    var filePaths = files
        .map(x => path.join(dirPath, x))
        .filter(x => fs.lstatSync(x).isFile);

    if (extensions)
    {
        filePaths = filePaths
            .filter(filePath => {
                var ext = path.extname(filePath);
                return extensions.indexOf(ext) !== -1;
            });
    }

    return filePaths;
}

export async function canAccessFileOrDirectory(
    path: string
)
{
    return new Promise((resolve, reject) => {
        fs.access(path, (err) => {
            resolve(!err);
        })
    });
}
