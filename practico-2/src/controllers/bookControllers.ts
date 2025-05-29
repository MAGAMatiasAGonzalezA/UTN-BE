import { Request, Response } from "express";
import { Book } from "../models/bookModels"
import { createResToClient } from "../utils/resToclient";

const createBook = async (req: Request, res: Response): Promise<any> => {
    try {
        const body = req.body
        const newBook = new Book(body)
        const savedBook = await newBook.save()
        const resToClient = createResToClient(true, 201, "Libro ingresado con exito", savedBook)
        return res.json(resToClient)
    } catch (error) {
        const err = error as Error
        const resToClient = createResToClient(false, 500, err.message)
        return res.json(resToClient)
    }
}

const getAllBooks = async (req: Request, res: Response): Promise<any> => {
    try {
        const books = await Book.find()
        const resToClient = createResToClient(true, 200, "Recuperando lista de libros", books)
        return res.json(resToClient)
    } catch (error) {
        const err = error as Error
        const resToClient = createResToClient(false, 500, err.message)
        return res.json(resToClient)
    }
}

const getBookById = async (req: Request, res: Response): Promise<any> => {
    try {
        const id = req.params.id
        const bookfind = await Book.findById(id)

        if (!bookfind) {
            const resToClient = createResToClient(false, 404, "Libro no encontrado")
            return res.json(resToClient)
        }
        const resToClient = createResToClient(true, 200, "libro encontrado, mostrando", bookfind)
        return res.json(resToClient)
    } catch (error) {
        const err = error as Error
        const resToClient = createResToClient(false, 500, err.message)
        return res.json(resToClient)
    }
}

const deleteBook = async (req: Request, res: Response): Promise<any> => {
    try {
        const id = req.params.id
        const deletedBook = await Book.findByIdAndDelete(id)
        if (!deletedBook) {
            const resToClient = createResToClient(false, 404, "Libro no encontrado")
            return res.json(resToClient)
        }
        const resToClient = createResToClient(true, 200, "libro encontrado y eliminado", deletedBook)
        return res.json(resToClient)
    } catch (error) {
        const err = error as Error
        const resToClient = createResToClient(false, 500, err.message)
        return res.json(resToClient)
    }
}

const updateBook = async (req: Request, res: Response): Promise<any> => {
    try {
        const id = req.params.id
        const body = req.body

        const updatedBook = await Book.findByIdAndUpdate(id, body, { new: true })
        if (!updatedBook) {
            const resToClient = createResToClient(false, 404, "Libro no encontrado")
            return res.json(resToClient)
        }
        const resToClient = createResToClient(true, 200, "Libro actualizado", updatedBook)
        return res.json(resToClient)
    } catch (error) {
        const err = error as Error
        const resToClient = createResToClient(false, 500, err.message)
        return res.json(resToClient)
    }
}

export { createBook, getAllBooks, getBookById, deleteBook, updateBook }