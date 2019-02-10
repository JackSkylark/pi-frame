import { MetaData } from "./MetaData";

export type ListFilesResponse =
{
    entries: MetaData[];
    cursor: string;
    has_more: boolean;
}
