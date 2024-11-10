import { Router } from "express";
import { 
    createTag, 
    deleteTag, 
    getAllTags, 
    getTagById, 
    updateTag 
} from "../../controllers/tag";

const TagRouter = Router()

TagRouter.get("/", getAllTags)
TagRouter.get("/:id", getTagById)
TagRouter.post("/", createTag)
TagRouter.delete("/:id", deleteTag)
TagRouter.patch("/", updateTag)

export default TagRouter