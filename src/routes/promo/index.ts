import { Router } from "express";
import { 
    deletePromoById, 
    getAllPromo, 
    getPromoById, 
    postCreatePromo, 
    updatePromoById 
} from "../../controllers/promo";

const PromoRouter = Router()

PromoRouter.get("/", getAllPromo)
PromoRouter.get("/:id", getPromoById)
PromoRouter.post("/", postCreatePromo)
PromoRouter.delete("/:id", deletePromoById)
PromoRouter.patch("/", updatePromoById)

export default PromoRouter