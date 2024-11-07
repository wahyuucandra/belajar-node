import { Request, Response } from "express";
import { formatResponse } from "../utils/formatResponse";

const books = [
    { id: '1', title: 'Judul 1', author: 'Author 1' },
    { id: '2', title: 'Judul 2', author: 'Author 2' },
]

export const getAllBooks = (req: Request, res: Response) => {
    res.status(200).json(formatResponse(200, 'success', books));
};

export const createBook = (req: Request, res: Response) => {
    const { title, author } = req.body

    if (!title || !author) {
        res.status(400).json({
            status: 400,
            message: `title, author required`,
            data: null
        })
    }

    const newBook = {
        id: (books.length + 1).toString(),
        title,
        author
    }

    books.push(newBook)

    res.json({
        status: 200,
        message: `success`,
        data: newBook
    });
};

export const updateBookById = (req: Request, res: Response) => {
    const { id } = req.params
    const { title, author } = req.body
    const bookIndex = books.findIndex(item => item.id == id)

    if (bookIndex !== -1) {
        books[bookIndex] = { ...books[bookIndex], title, author };
        res.json(formatResponse(200, "Success", books[bookIndex]));
    } else {
        res.json(formatResponse(404, "Book not found", null));
    }
};

export const deleteBookById = (req: Request, res: Response) => {
    const { id } = req.params
    const bookIndex = books.findIndex(item => item.id == id)

    if (bookIndex === -1) {
        res.status(201).json(formatResponse(201, "book not found", null))
    }
    else {
        books.splice(bookIndex, 1);
        res.json(formatResponse(200, "Success", null));
    }
};

export const searchBookByAuthor = (req: Request, res: Response) => {
    const { author } = req.query;

    const filteredBooks = books.filter((b) =>
        b.author.toLocaleLowerCase().includes(author?.toString().toLocaleLowerCase() as string)
    );
    if (filteredBooks.length > 0) {
        res.json(formatResponse(200, "Success", filteredBooks));
    } else {
        res.json(formatResponse(404, "Book not found", null));
    }
};

export const searchBookById = (req: Request, res: Response) => {
    const { id } = req.params;
    const book = books.find((b) => b.id === id);
    if (book) {
        res.json(formatResponse(200, "Success", book));
    } else {
        res.json(formatResponse(404, "Book not found", null));
    }
};