import { Document } from "mongoose";

export interface Frame extends Document {
    readonly key: string;
    readonly name: string;
    readonly playlistId: string | null;
}
