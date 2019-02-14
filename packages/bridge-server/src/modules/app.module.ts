import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { FrameModule } from "./frame/frame.module";

@Module({
    imports: [ 
        MongooseModule.forRoot("mongodb://localhost/pi-frame-bridge"),
        FrameModule 
    ]
})
export class ApplicationModule
{}
