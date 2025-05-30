// Importo dede "mongoose" Schema y model, para establecer el esquema en la DB y crear su modelo
import { Schema, model } from "mongoose"
// Importo la interface de mis liros desde su ubicación
import { IBook } from "../interfaces/bookInterface"

// Creo un esquema usando la interface de mis libros creada anteriormente
const bookSchema: Schema = new Schema<IBook>({
    title: { type: String, required: true, unique: true },
    author: { type: String, required: true },
    publishedYear: Number,
    genre: String,
    avaible: { type: Boolean, default: true }
}, {
    versionKey: false /* Descato la versión por defecto*/
})

// Fijo el esquema en stricto, para que ignore datos extras enviados
bookSchema.set("strict", true);

// Le guardo en una variable para su uso posterior
const Book = model<IBook>("Book", bookSchema)

// Exporto la variable
export { Book }