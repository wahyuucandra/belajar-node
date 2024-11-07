import { Router } from "express";
import { 
    createBook, 
    deleteBookById, 
    getAllBooks, 
    searchBookByAuthor, 
    searchBookById, 
    updateBookById 
} from "../controllers/book.controller";

const BookRouter = Router();

BookRouter.get("/", getAllBooks);
BookRouter.post("/", createBook);
BookRouter.put("/:id", updateBookById);
BookRouter.delete("/:id", deleteBookById);
BookRouter.get("/search", searchBookByAuthor);
BookRouter.get("/:id", searchBookById);

export default BookRouter