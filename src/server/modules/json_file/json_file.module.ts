import { Module } from "@nestjs/common";
import { JsonFileProvider } from "./json_file.provider";

@Module({
    providers: [ JsonFileProvider ],
    exports: [ JsonFileProvider ]
})
export class JsonFileModule
{}
