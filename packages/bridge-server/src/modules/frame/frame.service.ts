import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Frame } from "./frame.interface";

@Injectable()
export class FrameService {
    constructor(
        @InjectModel("frame") private readonly frameModel: Model<Frame>
    ){}

    async findAll(): Promise<Frame[]> {
        console.log(await this.frameModel.find().exec());
        return await this.frameModel.find().exec();
    }
}
