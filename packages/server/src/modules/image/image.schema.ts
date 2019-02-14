import * as mongoose from 'mongoose';

export const ImageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    path: {
        type: String,
        required: true,
    },
    displayCount: {
        type: Number,
        required: true,
    }
});
