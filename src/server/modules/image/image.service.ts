import * as fs from "fs";
import * as path from "path";
import { Injectable, OnModuleInit } from "@nestjs/common";
import { ShuffledStack } from "./ShuffledStack";
import { getFiles } from "../../utilities/fsHelpers";

type Image = {
    path: string;
    ext: string;
    content: string;
}

@Injectable()
export class ImageFilePathsProvider implements OnModuleInit
{    
    private itemRepo = new ShuffledStack<string>();

    async onModuleInit() 
    {
        const imagesDirPath = path.join(__dirname, "images");
        var filePaths = await getFiles(imagesDirPath, [
            ".jpeg",
            ".jpg"
        ]);

        this.itemRepo.addRange(filePaths, x => x);
    }

    public getNextImagePath = async () => this.itemRepo.getNext();
    public getNextImage = async (): Promise<Image> => {
        const imagePath = await this.getNextImagePath();

        if (!imagePath)
        {
            throw new Error("No Images");
        }

        const ext = path.extname(imagePath);
        const fileContent = await fs.promises.readFile(
            imagePath,
            {
                encoding: "utf8"
            });

        return {
            content: fileContent.toString(),
            ext: ext,
            path: imagePath
        };
    }
}
