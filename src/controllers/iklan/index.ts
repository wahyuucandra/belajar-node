import { Request, Response } from "express"
import { IklanService } from "../../services/iklan"
import { formatResponse } from "../../utils/formatResponse"


export const getAllIklan = async (req: Request, res: Response) => {
    const data = await IklanService.findAll()

    if (!data) {
        res.status(404).json(formatResponse(404, 'Data Not Found', null))
        return
    }

    res.status(200).json(formatResponse(200, 'success', data))
}

export const getIklanById = async (req: Request, res: Response) => {
    const { id } = req.params

    const data = await IklanService.findById(id)

    if (!data) {
        res.status(404).json(formatResponse(404, 'Data Not Found', null))
        return
    }

    res.status(200).json(formatResponse(200, 'success', data))
}

export const createIklan = async (req: Request, res: Response) => {
    try {
        const newIklan = await IklanService.create(req.body);
        res.json(formatResponse(200, "Success", newIklan));
    } catch (error: any) {
        res.status(500).json({ error: `Failed to create iklan : ${error.message}` });
    }
}

export const updateIklanById = async (req: Request, res: Response) => {
    try {
        const { id } = req.body

        const data = await IklanService.findById(id)

        if (!data) {
            res.status(404).json(formatResponse(404, 'Data Not Found', null))
            return
        }

        const newIklan = await IklanService.update(id, req.body);
        res.json(formatResponse(200, "Success", newIklan));

    } catch (error: any) {
        res.status(500).json({ error: `Failed to update iklan : ${error.message}` });
    }
}

export const deleteIklanById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params

        const data = await IklanService.findById(id)

        if (!data) {
            res.status(404).json(formatResponse(404, 'Data Not Found', null))
            return
        }

        const newIklan = await IklanService.remove(id);
        res.json(formatResponse(200, "Success", newIklan));

    } catch (error: any) {
        res.status(500).json({ error: `Failed to delete iklan : ${error.message}` });
    }
}