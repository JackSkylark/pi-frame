import { Controller, Get, Res } from "@nestjs/common";
import { Response } from "express";
import { FrameService } from "./frame.service";

@Controller("frame")
export class FrameController {
    constructor(
        private readonly frameService: FrameService
    ){}

    @Get()
    async getAllConnectedFrames()
    {
        return await this.frameService.findAll();
    }
}
