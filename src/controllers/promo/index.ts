import { Request, Response } from "express"
import { SPromo } from "../../services/promo"
import { formatResponse } from "../../utils/formatResponse"


export const getAllPromo = async (req: Request, res: Response) => {
    const data = await SPromo.findAll()

    if (!data) {
        res.status(404).json(formatResponse(404, 'Data Not Found', null))
        return
    }

    res.status(200).json(formatResponse(200, 'success', data))
}

export const getPromoById = async (req: Request, res: Response) => {
    const { id } = req.params

    const data = await SPromo.findById(id)

    if (!data) {
        res.status(404).json(formatResponse(404, 'Data Not Found', null))
        return
    }

    res.status(200).json(formatResponse(200, 'success', data))
}

export const postCreatePromo = async (req: Request, res: Response) => {
    try {
        const newPromo = await SPromo.create(req.body);
        res.json(formatResponse(200, "Success", newPromo));
    } catch (error: any) {
        res.status(500).json({ error: `Failed to create promo : ${error.message}` });
    }
}

export const deletePromoById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params

        const data = await SPromo.findById(id)

        if (!data) {
            res.status(404).json(formatResponse(404, 'Data Not Found', null))
            return
        }

        const newPromo = await SPromo.remove(id);
        res.json(formatResponse(200, "Success", newPromo));

    } catch (error: any) {
        res.status(500).json({ error: `Failed to delete promo : ${error.message}` });
    }
}

export const updatePromoById = async (req: Request, res: Response) => {
    try {
        const { id } = req.body

        const data = await SPromo.findById(id)

        if (!data) {
            res.status(404).json(formatResponse(404, 'Data Not Found', null))
            return
        }

        const newPromo = await SPromo.update(id, req.body);
        res.json(formatResponse(200, "Success", newPromo));

    } catch (error: any) {
        res.status(500).json({ error: `Failed to update promo : ${error.message}` });
    }
}