import { Request, Response } from "express"
import { blogService } from "../../services/blog"
import { formatResponse } from "../../utils/formatResponse"

export const getAllBlog = async (req: Request, res: Response) => {
    const data = await blogService.findAll()

    if (!data) {
        res.status(404).json(formatResponse(404, 'Data Not Found', null))
        return
    }

    res.status(200).json(formatResponse(200, 'success', data))
}

export const getBlogById = async (req: Request, res: Response) => {
    const { id } = req.params

    const data = await blogService.findById(id)

    if (!data) {
        res.status(404).json(formatResponse(404, 'Data Not Found', null))
        return
    }

    res.status(200).json(formatResponse(200, 'success', data))
}

export const createBlog = async (req: Request, res: Response) => {
    try {
        const newBlog = await blogService.create(req.body);
        res.json(formatResponse(200, "Success", newBlog));
    } catch (error: any) {
        res.status(500).json({ error: `Failed to create blog : ${error.message}` });
    }
}

export const updateBlogById = async (req: Request, res: Response) => {
    try {
        const { id } = req.body

        const data = await blogService.findById(id)

        if (!data) {
            res.status(404).json(formatResponse(404, 'Data Not Found', null))
            return
        }

        const newBlog = await blogService.update(id, req.body);
        res.json(formatResponse(200, "Success", newBlog));

    } catch (error: any) {
        res.status(500).json({ error: `Failed to update blog : ${error.message}` });
    }
}

export const deleteBlogById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params

        const data = await blogService.findById(id)

        if (!data) {
            res.status(404).json(formatResponse(404, 'Data Not Found', null))
            return
        }

        const newBlog = await blogService.remove(id);
        res.json(formatResponse(200, "Success", newBlog));

    } catch (error: any) {
        res.status(500).json({ error: `Failed to delete blog : ${error.message}` });
    }
}

export const createBlogWithCar = async (req: Request, res: Response) => {
    const blogData = req.body;

    try {
        const newBlog = await blogService.createBlogWithCar(blogData);
        res.json(formatResponse(201, "Success", newBlog));
    } catch (error: any) {
        res.status(500).json({ error: "Failed to create blog : " + error.message });
    }
};