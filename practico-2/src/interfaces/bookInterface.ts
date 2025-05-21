import { Document } from "mongoose";

interface IBook extends Document {
    title: string,
    author: string,
    publishedYear?: number,
    genre?: string,
    avaible?: boolean
}

export { IBook }