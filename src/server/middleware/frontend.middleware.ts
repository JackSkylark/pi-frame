import * as path from "path";
import { MiddlewareFunction } from "@nestjs/common";
import { AppConfig } from "../../common/config/app.config";

const allowedExt = [
    '.js',
    '.ico',
    '.css',
    '.png',
    '.jpg',
    '.woff2',
    '.woff',
    '.ttf',
    '.svg'
];

export const frontendMiddleware: MiddlewareFunction = (
    req,
    res,
    next
) =>
{
    const { url } = req;
    if (url.indexOf(AppConfig.API_URL) === 0)
    {
        next();
    }
    else if (allowedExt.filter(ext => url.indexOf(ext) > 0).length > 0)
    {
        const path = resolvePath(url);
        res.sendFile(path);
    }
    else
    {
        const path = resolvePath("index.html");
        res.sendFile(path);
    }
}

function resolvePath(file: string)
{
    return path.resolve(__dirname, `public/${file}`);
}
