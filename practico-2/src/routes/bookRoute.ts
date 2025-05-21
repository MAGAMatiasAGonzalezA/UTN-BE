import { Router } from "express"
import { getAllBooks } from "../controllers/bookControllers"

const bookRoutes = Router()

// recuperar lista de libros
bookRoutes.get("/", getAllBooks)

export { bookRoutes }