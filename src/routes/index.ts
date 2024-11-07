import { Router } from "express";
import MathRouter from "./math.routes";
import UserRouter from "./user.route";
import BookRouter from "./book.route";

const router = Router();

router.use("/", UserRouter)
router.use("/books", BookRouter)
router.use("/math", MathRouter)

export default router