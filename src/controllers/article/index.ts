import { SArticle } from "../../services/articles"
import { Request, Response } from "express"
import { formatResponse } from "../../utils/formatResponse"
import redisClient from "../../config/redis.config"


export const getAllArticles = async (req: Request, res: Response) => {
    const data = await SArticle.findAll()

    if (!data) {
        res.status(404).json(formatResponse(404, 'Data Not Found', null))
        return
    }

    res.status(200).json(formatResponse(200, 'success', data))
}

export const getArticleById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params

        const data = await SArticle.findById(id)

        if (!data) {
            res.status(404).json(formatResponse(404, 'Data Not Found', null))
            return
        }

        res.status(200).json(formatResponse(200, 'success', data))
    } catch (error: any) {
        res.status(500).json({ error: `Failed to create article : ${error.message}` });
    }
}

export const postCreateArticle = async (req: Request, res: Response) => {
    try {
        const newArticle = await SArticle.create(req.body);
        res.json(formatResponse(200, "Success", newArticle));
    } catch (error: any) {
        res.status(500).json({ error: `Failed to create article : ${error.message}` });
    }
}

export const deleteArticleById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params

        const data = await SArticle.findById(id)

        if (!data) {
            res.status(404).json(formatResponse(404, 'Data Not Found', null))
            return
        }

        const newArticle = await SArticle.remove(id);
        res.json(formatResponse(200, "Success", newArticle));

    } catch (error: any) {
        res.status(500).json({ error: `Failed to delete article : ${error.message}` });
    }
}

export const updateArticleById = async (req: Request, res: Response) => {
    try {
        const { id } = req.body

        const data = await SArticle.findById(id)

        if (!data) {
            res.status(404).json(formatResponse(404, 'Data Not Found', null))
            return
        }

        const newArticle = await SArticle.update(id, req.body);
        res.json(formatResponse(200, "Success", newArticle));

    } catch (error: any) {
        res.status(500).json({ error: `Failed to update article : ${error.message}` });
    }
}
export const createArticleWithTags = async (req: Request, res: Response) => {
    const articleData = req.body.data;
    try {
        const newArticle = await SArticle.createWithTags(articleData);
        res.json(formatResponse(201, "Success", newArticle));
    } catch (error: any) {
        res.status(500).json({ error: "Failed to create article : " + error.message });
    }
};

export const CGetAllArticles = async (req: Request, res: Response) => {
    try {
        const articlesCache = await redisClient.getValue("articles");
        if (articlesCache) {
            console.log("from cache");

            res.json(formatResponse(200, "Success", JSON.parse(articlesCache)));
            return;
        }
        const articles = await SArticle.findAll();
        //   await redisClient.setValue("articles", JSON.stringify(articles));
        await redisClient.setValue("articles", JSON.stringify(articles), {
            EX: 60 * 60,
        })
        res.json(formatResponse(200, "Success", articles));
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};