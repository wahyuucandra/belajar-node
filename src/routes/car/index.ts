import { Router } from "express";
import { 
    deleteCarById, 
    getAllCar, 
    getCarById, 
    createCar, 
    updateCarById 
} from "../../controllers/car";

const CarRouter = Router()

CarRouter.get("/", getAllCar)
CarRouter.get("/:id", getCarById)
CarRouter.post("/", createCar)
CarRouter.delete("/:id", deleteCarById)
CarRouter.patch("/", updateCarById)

export default CarRouter