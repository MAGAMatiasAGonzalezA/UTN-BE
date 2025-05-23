import { Router } from "express"
import { getAllBooks, createBook, deleteBook, updateBook } from "../controllers/bookControllers"

const bookRoutes = Router()

// recuperar lista de libros
bookRoutes.get("/", getAllBooks)

bookRoutes.post("/", createBook)

bookRoutes.delete("/:id", deleteBook)

bookRoutes.patch("/:id", updateBook)



export { bookRoutes }