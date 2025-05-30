// Importo desde "express" Router, para crea las rutas
import { Router } from "express"
// Importo las variables que continene las funciones asincronicas
import { createBook, getAllBooks, getBookById, deleteBook, updateBook } from "../controllers/bookControllers"

// Habilito el uso del router por medio de una variable
const bookRoutes = Router()

// Hago uso del router para cada método a utilizar

// Ingresar un libro
bookRoutes.post("/", createBook)

// Recuperar todo los Libros
bookRoutes.get("/", getAllBooks)

// Recuperar un libro por su id
bookRoutes.get("/:id", getBookById)

// Eliminar un libro por su id
bookRoutes.delete("/:id", deleteBook)

// Modificar un libro por su id
bookRoutes.patch("/:id", updateBook)


// Exporto la variable
export { bookRoutes }