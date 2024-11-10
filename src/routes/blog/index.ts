import { Router } from "express";
import { 
    deleteBlogById, 
    getAllBlog, 
    getBlogById, 
    createBlog, 
    updateBlogById, 
    createBlogWithCar
} from "../../controllers/blog";

const BlogRouter = Router()

BlogRouter.get("/", getAllBlog)
BlogRouter.get("/:id", getBlogById)
BlogRouter.post("/", createBlog)
BlogRouter.post("/cars", createBlogWithCar)
BlogRouter.delete("/:id", deleteBlogById)
BlogRouter.patch("/", updateBlogById)

export default BlogRouter