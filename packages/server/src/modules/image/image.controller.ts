import { Controller, Get, Res } from "@nestjs/common";
import { ImageFilePathsProvider } from "./image.service";
import * as fs from "fs";
import { Response } from "express";

@Controller("image")
export class ImageController {
    constructor(
        private readonly imageProvider: ImageFilePathsProvider
    ){}

    @Get()
    async getNextImage(@Res() res: Response)
    {
        var image = await this.imageProvider.getNextImage();
        return res.sendFile(image.path);
    }
}