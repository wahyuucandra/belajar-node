import { Router } from "express";
import { 
    deleteHistoryByIndex, 
    getAllHistories, 
    getAllOperation, 
    getMathWithParams, 
    getMathWithQuery, 
    postMathWithBody } from "../controllers/math.controller";

const MathRouter = Router();

MathRouter.get("/list", getAllOperation)
MathRouter.get("/", getMathWithQuery)
MathRouter.get("/:valueA/:operation/:valueB", getMathWithParams)
MathRouter.post("/", postMathWithBody)
MathRouter.get("/history", getAllHistories)
MathRouter.delete("/history/:id", deleteHistoryByIndex);

export default MathRouter