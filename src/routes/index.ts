import { Router } from "express";
import MathRouter from "./math.routes";
//import UserRouter from "./user.route";
import BookRouter from "./book.route";
import userRouter from "./auth.routes"
import { checkAuth } from "../middlewares";

const router = Router();

router.use("/", userRouter)
router.use("/books", BookRouter)
router.use("/math", checkAuth, MathRouter)


export default router