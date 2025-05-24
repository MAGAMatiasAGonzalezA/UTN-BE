import { Router } from "express"
import { createBook, getAllBooks, getBookById, deleteBook, updateBook } from "../controllers/bookControllers"

const bookRoutes = Router()

// recuperar lista de libros
bookRoutes.post("/", createBook)

bookRoutes.get("/", getAllBooks)

bookRoutes.get("/:id", getBookById)

bookRoutes.delete("/:id", deleteBook)

bookRoutes.patch("/:id", updateBook)



export { bookRoutes }