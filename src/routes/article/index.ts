import { Router } from "express";
import { 
    CGetAllArticles,
    createArticleWithTags,
    deleteArticleById, 
    //getAllArticles, 
    getArticleById, 
    postCreateArticle, 
    updateArticleById 
} from "../../controllers/article";

const ArticleRouter = Router()

// ArticleRouter.get("/", getAllArticles)
ArticleRouter.get("/", CGetAllArticles)
ArticleRouter.get("/:id", getArticleById)
ArticleRouter.post("/", postCreateArticle)
ArticleRouter.delete("/:id", deleteArticleById)
ArticleRouter.patch("/", updateArticleById)
ArticleRouter.post("/tags", createArticleWithTags);

export default ArticleRouter