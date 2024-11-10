import { Router } from "express";
import { 
    deleteIklanById, 
    getAllIklan, 
    getIklanById, 
    createIklan, 
    updateIklanById 
} from "../../controllers/iklan";

const IklanRouter = Router()

IklanRouter.get("/", getAllIklan)
IklanRouter.get("/:id", getIklanById)
IklanRouter.post("/", createIklan)
IklanRouter.delete("/:id", deleteIklanById)
IklanRouter.patch("/", updateIklanById)

export default IklanRouter