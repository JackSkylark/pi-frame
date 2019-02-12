import * as mongoose from "mongoose";
import { Frame } from "./frame.interface";

export const FrameSchema = new mongoose.Schema<Frame>({
    key: String,
    name: String,
    playlistId: String
});
