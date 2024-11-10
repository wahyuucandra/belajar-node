import { Router } from "express";
import MathRouter from "./math";
//import UserRouter from "./user.route";
import BookRouter from "./book";
import { checkAuth } from "../middlewares";
import PromoRouter from "./promo";
import ArticleRouter from "./article";
import TagRouter from "./tag";
import userRouter from "./auth";
import CarRouter from "./car";
import IklanRouter from "./iklan";
import BlogRouter from "./blog";

const router = Router();

router.use("/", userRouter)
router.use("/books", BookRouter)
router.use("/math", checkAuth, MathRouter)
router.use("/promos", PromoRouter)
router.use("/articles", ArticleRouter)
router.use("/tags", TagRouter)
router.use("/cars", CarRouter)
router.use("/iklans", IklanRouter)
router.use("/blogs", BlogRouter)

export default router