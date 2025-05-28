import { Schema, model } from "mongoose"
import { IBook } from "../interfaces/bookInterface"

const bookSchema: Schema = new Schema<IBook>({
    title: { type: String, required: true, unique: true },
    author: { type: String, required: true },
    publishedYear: Number,
    genre: String,
    avaible: { type: Boolean, default: true }
}, {
    versionKey: false
})

bookSchema.set("strict", true);

const Book = model<IBook>("Book", bookSchema)

export { Book }