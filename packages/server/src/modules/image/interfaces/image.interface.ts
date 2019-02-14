import { Document } from "mongoose";

export interface Image extends Document {
    readonly name : string;
    readonly path : string;
    readonly ext: string;
    readonly displayCount: number;
}
