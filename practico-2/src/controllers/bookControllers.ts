import { Request, Response } from "express";
import { Book } from "../models/bookModels"

const getAllBooks = async (req: Request, res: Response): Promise<any> => {
    try {
        const books = await Book.find()
        return res.json({
            success: true,
            data: books,
            message: "Recuperando lista de libros"
        })
    } catch (error) {
        const err = error as Error
        return res.status(500).json({
            succes: false,
            message: err.message
        })
    }
}

const createBook = async (req: Request, res: Response): Promise<any> => {
    try {
        const body = req.body

        const newBook = new Book(body)
        const savedBook = await newBook.save()
        res.status(201).json({
            success: true,
            data: savedBook,
            message: "Libro agregado con éxito"
        })
    } catch (error) {
        const err = error as Error
        res.status(500).json({
            success: false,
            message: err.message
        })
    }


}

const deleteBook = async (req: Request, res: Response): Promise<any> => {
    try {
        const id = req.params.id
        const deletedBook = await Book.findByIdAndDelete(id)
        if (!deletedBook) return res.status(404).json({
            success: false,
            message: "Libro no encontrado"
        })
        return res.json({
            success: true,
            data: deletedBook,
            message: "Libro eliminado con éxito"
        })
    } catch (error) {
        const err = error as Error
        return res.json({
            success: false,
            message: err.message
        })
    }
}

const updateBook = async (req: Request, res: Response): Promise<any> => {
    try {
        const id = req.params.id
        const body = req.body

        const updatedBook = await Book.findByIdAndUpdate(id, body, { new: true })
        if (!updatedBook) return res.status(404).json({ success: false, message: "Libro no encontrado" })

        return res.json({
            success: true,
            data: updatedBook,
            message: "Liro actualizado"
        })
    } catch (error) {
        const err = error as Error
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

export { getAllBooks, createBook, deleteBook, updateBook }