import * as path from "path";
import { MiddlewareFunction } from "@nestjs/common";
import { Request, Response } from "express";

type SpaMiddlewareOptions = {
    pathToPublicDir: string;
    htmlFilename?: string;
    apiPrefix?: string;
    allowedExtensions?: string[];
}

export const buildMiddleware = (
    options: SpaMiddlewareOptions
): MiddlewareFunction<Request, Response> => 
(
    req,
    res,
    next
) => 
{
    const { apiPrefix, htmlFilename, pathToPublicDir, allowedExtensions } = buildOptions(options);
    const { url } = req;

    if (url.indexOf(apiPrefix) === 0)
    {
        next();
    }
    else if (allowedExtensions.filter(ext => url.indexOf(ext) > 0).length > 0)
    {
        console.log(url);
        const path = resolvePath(url);
        res.sendFile(path);
    }
    else
    {
        const path = resolvePath(htmlFilename);
        res.sendFile(path);
    }

    function resolvePath(file: string)
    {
        // remove leading slash if present
        const filePath = file.startsWith("/") && file.substring(1) || file;
        return path.resolve(pathToPublicDir, filePath);
    }
}

function buildOptions(
    options: SpaMiddlewareOptions
): Required<SpaMiddlewareOptions>
{
    if (!options.pathToPublicDir)
    {
        throw new Error("pathToPublicDir must be valid");
    }

    return {
        pathToPublicDir: options.pathToPublicDir,
        apiPrefix: options.apiPrefix || "/api",
        htmlFilename: "index.html",
        allowedExtensions: options.allowedExtensions || [
            '.js',
            '.ico',
            '.css',
            '.png',
            '.jpg',
            '.woff2',
            '.woff',
            '.ttf',
            '.svg'
        ]
    }
}

