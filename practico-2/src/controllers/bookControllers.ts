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

export { getAllBooks }