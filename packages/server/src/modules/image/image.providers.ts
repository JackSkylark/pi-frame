import { Connection } from 'mongoose';

import { ImageSchema } from './image.schema';
import { IMAGE_MODEL_PROVIDER, DB_PROVIDER } from '../../constants';

export const postsProviders = [
    {
        provide: IMAGE_MODEL_PROVIDER,
        useFactory: (connection: Connection) => connection.model('image', ImageSchema),
        inject: [DB_PROVIDER],
    },
];