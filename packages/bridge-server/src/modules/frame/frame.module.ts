import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { FrameController } from "./frame.controller";
import { FrameService } from "./frame.service";
import { FrameSchema } from "./frame.schema";

const mongooseModule = MongooseModule.forFeature([{
    collection: "frame",
    name: "frame",
    schema: FrameSchema
}]);

@Module({
    imports: [ mongooseModule ],
    controllers: [ FrameController ],
    providers: [
        FrameService
    ]
})
export class FrameModule{}
