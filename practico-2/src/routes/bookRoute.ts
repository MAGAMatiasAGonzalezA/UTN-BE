import { Router } from "express"
import { getAllBooks, createBooks } from "../controllers/bookControllers"

const bookRoutes = Router()

// recuperar lista de libros
bookRoutes.get("/", getAllBooks)

bookRoutes.post("/", createBooks)

export { bookRoutes }