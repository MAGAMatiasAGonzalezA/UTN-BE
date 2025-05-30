// Importo de "mongoose" Document, que me genera un _id: automatico
import { Document } from "mongoose";

// Creo la interface de los libros
interface IBook extends Document {
    title: string,
    author: string,
    publishedYear?: number,
    genre?: string,
    avaible?: boolean
}

// Exporto la interface
export { IBook }